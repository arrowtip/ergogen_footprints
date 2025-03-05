// Kailh Choc PG1350 and MX
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    keycaps: default is false
//      if true, will add choc sized keycap box around the footprint
//    preroute: default is true
//      if true, add diode and add traces to/from diode
// 

module.exports = {
  params: {
    designator: 'S',
    keycaps: false,
    preroute: true,
    trace_width: 0.5,
    from: undefined,
    to: undefined
  },
  body: p => {
    const standard = `
      (module PG1350_MX (layer F.Cu) (tedit 5DD50112)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" 
        (at 0 0) 
        (layer F.SilkS) 
        ${p.ref_hide} 
        (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" 
        (at 0 0) 
        (layer F.SilkS) 
        hide 
        (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${''/* corner marks */}
      (fp_line (start -7 -6) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -6 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -6 -7) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -7 6) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 6) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 6 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 6 7) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 7 -6) (layer Dwgs.User) (width 0.15))      
      
      ${''/* middle shaft */}
      (pad "" np_thru_hole circle 
        (at 0 0) 
        (size 3.9878 3.9878) 
        (drill 3.9878) 
        (layers *.Cu *.Mask))
        
      ${''/* stabilizers choc */}
      (pad "" np_thru_hole circle 
        (at 5.5 0) 
        (size 1.7018 1.7018) 
        (drill 1.7018) 
        (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle 
        (at -5.5 0) 
        (size 1.7018 1.7018) 
        (drill 1.7018) 
        (layers *.Cu *.Mask))
      ${''/* stabilizers mx */}
      (pad "" np_thru_hole circle 
        (at 5.08 0) 
        (size 1.7018 1.7018) 
        (drill 1.7018) 
        (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle 
        (at -5.08 0) 
        (size 1.7018 1.7018) 
        (drill 1.7018) 
        (layers *.Cu *.Mask))
      `
    const keycap = `
      ${'' /* keycap marks (for mx)*/}
      (fp_line (start 9.5 -9.5) (end -9.5 -9.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9.5 -9.5) (end -9.5 9.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9.5 9.5) (end 9.5 9.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9.5 9.5) (end 9.5 -9.5) (layer Dwgs.User) (width 0.15))
      `
    const diode = `
      (fp_line (start -0.25 5) (end -0.75 5) (layer F.SilkS) (width 0.1))
      (fp_line (start -0.25 5.4) (end 0.35 5) (layer F.SilkS) (width 0.1))
      (fp_line (start -0.25 4.6) (end -0.25 5.4) (layer F.SilkS) (width 0.1))
      (fp_line (start 0.35 5) (end -0.25 4.6) (layer F.SilkS) (width 0.1))
      (fp_line (start 0.35 5) (end 0.35 5.55) (layer F.SilkS) (width 0.1))
      (fp_line (start 0.35 5) (end 0.35 4.45) (layer F.SilkS) (width 0.1))
      (fp_line (start 0.75 5) (end 0.35 5) (layer F.SilkS) (width 0.1))

      ${''/* SMD pads */}
      (pad 1 smd rect 
        (at 1.65 5 ${p.r}) 
        (size 0.9 1.2) 
        (layers F.Cu F.Paste F.Mask) 
        ${p.to})
      (pad 2 smd rect 
        (at -1.65 5 ${p.r}) 
        (size 0.9 1.2) 
        (layers F.Cu F.Paste F.Mask) 
        ${p.from})
      
      ${''/* THT terminals */}
      (pad 1 thru_hole rect 
        (at 3.81 5 ${p.r}) 
        (size 1.778 1.778) 
        (drill 0.9906)
        (layers *.Cu *.Mask) 
        ${p.to})
      (pad 2 thru_hole circle 
        (at -3.81 5 ${p.r}) 
        (size 1.905 1.905) 
        (drill 0.9906) 
        (layers *.Cu *.Mask)
        ${p.from})
      `
    const get_at_coordinates = () => {
        const pattern = /\(at (-?[\d\.]*) (-?[\d\.]*) (-?[\d\.]*)\)/;
        const matches = p.at.match(pattern);
        if (matches && matches.length == 4) {
            return [parseFloat(matches[1]), parseFloat(matches[2]), parseFloat(matches[3])];
        } else {
            return null;
        }
    }

    const adjust_point = (x, y) => {
        const at_l = get_at_coordinates();
        if(at_l == null) {
            throw new Error(
            `Could not get x and y coordinates from p.at: ${p.at}`
            );
        }
        const at_x = at_l[0];
        const at_y = at_l[1];
        const at_angle = at_l[2];
        const adj_x = at_x + x;
        const adj_y = at_y + y;

        const radians = (Math.PI / 180) * at_angle,
            cos = Math.cos(radians),
            sin = Math.sin(radians),
            nx = (cos * (adj_x - at_x)) + (sin * (adj_y - at_y)) + at_x,
            ny = (cos * (adj_y - at_y)) - (sin * (adj_x - at_x)) + at_y;

        const point_str = `${nx.toFixed(5)} ${ny.toFixed(5)}`;
        return point_str;
    }
    const traces = `
      ${''/* diode pad to hole */ }
      (segment
        (start ${adjust_point(-3.81, 5)})
        (end ${adjust_point(-1.65, 5)})
        (width ${p.trace_width})
        (layer "F.Cu")
        (net 1)
        (uuid "f63fe8cd-3353-48e3-9ed6-cd7206921eb4")
      )
      (segment
        (start ${adjust_point(3.81, 5)})
        (end ${adjust_point(1.65, 5)})
        (width ${p.trace_width})
        (layer "F.Cu")
        (net 2)
        (uuid "eda2f40a-e7f4-4227-83e1-77916e727049")
      )
      ${''/* hotswap from to from */}
      (segment
        (start ${adjust_point(-7.085, -2.54)})
        (end ${adjust_point(-7.085, -4.265)})
        (width ${p.trace_width})
        (layer "B.Cu")
        (net 1)
        (uuid "5fc16beb-5ed5-46f9-bff8-efa66e5f66a2")
      )
      (segment
        (start ${adjust_point(-5.4, -5.95)})
        (end ${adjust_point(-3.275, -5.95)})
        (width ${p.trace_width})
        (layer "B.Cu")
        (net 1)
        (uuid "51a54e94-966b-42ad-b2bd-deabe64562dc")
      )
      (segment
        (start ${adjust_point(-7.085, -4.265)})
        (end ${adjust_point(-5.4, -5.95)})
        (width ${p.trace_width})
        (layer "B.Cu")
        (net 1)
        (uuid "ca092736-26f8-454c-9af3-1daea333bb40")
      )
      ${''/* hotswap-from to diode */}
      (segment
        (start ${adjust_point(-7.085, -2.54)})
        (end ${adjust_point(-7.8, -1.825)})
        (width ${p.trace_width})
        (layer "B.Cu")
        (net 1)
        (uuid "334881fb-e1db-4ca3-bd07-4d647787ebcc")
      )
      (segment
        (start ${adjust_point(-7.8, 2.25)})
        (end ${adjust_point(-5.05, 5)})
        (width ${p.trace_width})
        (layer "B.Cu")
        (net 1)
        (uuid "6e234588-e4ec-45c0-b2f6-002cdbff7e58")
      )
      (segment
        (start ${adjust_point(-7.8, -1.825)})
        (end ${adjust_point(-7.8, 2.25)})
        (width ${p.trace_width})
        (layer "B.Cu")
        (net 1)
        (uuid "9a15080c-914c-44e3-95e4-189e8095b82a")
      )
      (segment
        (start ${adjust_point(-5.05, 5)})
        (end ${adjust_point(-3.81, 5)})
        (width ${p.trace_width})
        (layer "B.Cu")
        (net 1)
        (uuid "f899f364-dc03-4789-bbed-d436c0fdfc88")
      )
      ${''/* diode to hotswap-to */}
      (segment
        (start ${adjust_point(8.275, -3.75)})
        (end ${adjust_point(8.275, 2.275)})
        (width ${p.trace_width})
        (layer "B.Cu")
        (net 2)
        (uuid "2c5df98e-0170-4f69-825c-63f730d60ee4")
      )
      (segment
        (start ${adjust_point(5.55, 5)})
        (end ${adjust_point(3.81, 5)})
        (width ${p.trace_width})
        (layer "B.Cu")
        (net 2)
        (uuid "70c8d573-90d6-4846-8dd7-cc3edf06ab13")
      )
      (segment
        (start ${adjust_point(8.275, 2.275)})
        (end ${adjust_point(5.55, 5)})
        (width ${p.trace_width})
        (layer "B.Cu")
        (net 2)
        (uuid "a39314fa-0b69-4f0d-8051-d3d91ae9ec32")
      )
      `
    function pins(def_neg, def_pos, def_side) {
      return `
        ${'' /* holes choc */}
        (pad "" np_thru_hole circle 
          (at ${def_pos}5 -3.75) 
          (size 3 3) 
          (drill 3) 
          (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle 
          (at 0 -5.95) 
          (size 3 3) 
          (drill 3) 
          (layers *.Cu *.Mask))
        ${'' /* holes mx */}
        (pad "" np_thru_hole circle 
          (at ${def_pos}2.54 -5.08) 
          (size 3 3) 
          (drill 3) 
          (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle 
          (at ${def_neg}3.81 -2.54) 
          (size 3 3) 
          (drill 3) 
          (layers *.Cu *.Mask))
    
        ${'' /* net pads choc */}
        (pad 1 smd rect 
          (at ${def_neg}3.275 -5.95 ${p.r}) 
          (size 2.6 2.6) 
          (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) 
          ${p.from})
        (pad 2 smd rect 
          (at ${def_pos}8.275 -3.75 ${p.r}) 
          (size 2.6 2.6) 
          (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) 
          ${p.to})
        ${'' /* net pads mx */}
        (pad 1 smd rect 
          (at ${def_neg}7.085 -2.54 ${p.r}) 
          (size 2.55 2.5) 
          (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) 
          ${p.from})
        (pad 2 smd rect 
          (at ${def_pos}5.842 -5.08 ${p.r}) 
          (size 2.55 2.5) 
          (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) 
          ${p.to})
      `
    }
    return `
      ${standard}
      ${p.keycaps ? keycap : ''}
      ${p.preroute ? diode : ''}
      ${pins('-', '', 'B')})
      ${p.preroute ? traces : ''}
      `
  }
}

