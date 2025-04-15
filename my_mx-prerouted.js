// Any MX switch
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    hotswap: default is false
//      if true, will include holes and pads for Kailh MX hotswap sockets
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible 
//    keycaps: default is false
//      if true, will add choc sized keycap box around the footprint
//
// note: hotswap and reverse can be used simultaneously

module.exports = {
  params: {
    designator: 'S',
    keycaps: false,
    preroute: false,
    trace_width: 0.5,
    top_vert: false,
    in: undefined,
    out: undefined,
    inout: undefined,
  },
  body: p => {
    const standard = `
      (module MX (layer F.Cu) (tedit 5DD4F656)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

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
      (pad "" np_thru_hole circle (at 0 0) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))

      ${''/* stabilizers */}
      (pad "" np_thru_hole circle (at 5.08 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -5.08 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))

      ${''/* diode symbols */}
      (fp_line (start 0.25 5) (end 0.75 5) (layer F.SilkS) (width 0.1))
      (fp_line (start 0.25 5.4) (end -0.35 5) (layer F.SilkS) (width 0.1))
      (fp_line (start 0.25 4.6) (end 0.25 5.4) (layer F.SilkS) (width 0.1))
      (fp_line (start -0.35 5) (end 0.25 4.6) (layer F.SilkS) (width 0.1))
      (fp_line (start -0.35 5) (end -0.35 5.55) (layer F.SilkS) (width 0.1))
      (fp_line (start -0.35 5) (end -0.35 4.45) (layer F.SilkS) (width 0.1))
      (fp_line (start -0.75 5) (end -0.35 5) (layer F.SilkS) (width 0.1))
      (fp_line (start 0.25 5) (end 0.75 5) (layer B.SilkS) (width 0.1))
      (fp_line (start 0.25 5.4) (end -0.35 5) (layer B.SilkS) (width 0.1))
      (fp_line (start 0.25 4.6) (end 0.25 5.4) (layer B.SilkS) (width 0.1))
      (fp_line (start -0.35 5) (end 0.25 4.6) (layer B.SilkS) (width 0.1))
      (fp_line (start -0.35 5) (end -0.35 5.55) (layer B.SilkS) (width 0.1))
      (fp_line (start -0.35 5) (end -0.35 4.45) (layer B.SilkS) (width 0.1))
      (fp_line (start -0.75 5) (end -0.35 5) (layer B.SilkS) (width 0.1))
  
      ${''/* SMD pads on both sides */}
      (pad 2 smd rect 
        (at -1.65 5 ${p.r}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.out})
      (pad 1 smd rect 
        (at 1.65 5 ${p.r}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) 
        ${p.inout}
      )
      (pad 2 smd rect (at -1.65 5 ${p.r}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.out})
      (pad 1 smd rect (at 1.65 5 ${p.r}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask))
      
      ${''/* THT terminals */}
      (pad 2 thru_hole rect (at -3.81 5 ${p.r}) (size 1.778 1.778) (drill 0.9906) (layers *.Cu *.Mask) ${p.out})
      (pad 1 thru_hole circle (at 3.81 5 ${p.r}) (size 1.905 1.905) (drill 0.9906) (layers *.Cu *.Mask))
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

    const vertical = p.top_vert ? 'F' : 'B';
    const horizontal = p.top_vert ? 'B' : 'F';

    const traces = `
      ${'' /* pre-routed traces */}
      ${'' /* connect pins for reverse */}
      (segment
        (start ${adjust_point(-2.54, -5.08)})
        (end ${adjust_point(2.54, -5.08)})
        (width ${p.trace_width})
        (layer "${horizontal}.Cu")
      )
      (segment
        (start ${adjust_point(-3.81, -2.54)})
        (end ${adjust_point(3.81, -2.54)})
        (width ${p.trace_width})
        (layer "${horizontal}.Cu")
      )

      (segment
        (start ${adjust_point(1.65, 5)})
        (end ${adjust_point(3.81, 5)})
        (width ${p.trace_width})
        (layer "${horizontal}.Cu")
      )
      (segment
        (start ${adjust_point(5.5, -5.08)})
        (end ${adjust_point(7, -3.58)})
        (width ${p.trace_width})
        (layer "${vertical}.Cu")
      )
      (segment
        (start ${adjust_point(5.5, 5)})
        (end ${adjust_point(3.81, 5)})
        (width ${p.trace_width})
        (layer "${vertical}.Cu")
      )
      (segment
        (start ${adjust_point(2.54, -5.08)})
        (end ${adjust_point(5.5, -5.08)})
        (width ${p.trace_width})
        (layer "${vertical}.Cu")
      )
      (segment
        (start ${adjust_point(7, 3.5)})
        (end ${adjust_point(5.5, 5)})
        (width ${p.trace_width})
        (layer "${vertical}.Cu")
      )
      (segment
        (start ${adjust_point(7, -3.58)})
        (end ${adjust_point(7, 3.5)})
        (width ${p.trace_width})
        (layer "${vertical}.Cu")
      )
      (segment
        (start ${adjust_point(1.65, 5)})
        (end ${adjust_point(3.81, 5)})
        (width ${p.trace_width})
        (layer "${vertical}.Cu")
      )
      (segment
        (start ${adjust_point(-3.81, 5)})
        (end ${adjust_point(-1.65, 5)})
        (width ${p.trace_width})
        (layer "${horizontal}.Cu")
      )
    `

    const keycap = `
      ${'' /* keycap marks */}
      (fp_line (start -9.5 -9.5) (end 9.5 -9.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9.5 -9.5) (end 9.5 9.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9.5 9.5) (end -9.5 9.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9.5 9.5) (end -9.5 -9.5) (layer Dwgs.User) (width 0.15))
      `
    function pins(def_neg, def_pos, def_side) {
      if(p.hotswap) {
        return `
        ${'' /* holes */}
        (pad "" np_thru_hole circle (at ${def_pos}2.54 -5.08) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at ${def_neg}3.81 -2.54) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        
        ${'' /* net pads */}
        (pad 1 smd rect (at ${def_neg}7.085 -2.54 ${p.r}) (size 2.55 2.5) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.in})
        (pad 2 smd rect (at ${def_pos}5.842 -5.08 ${p.r}) (size 2.55 2.5) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask))
        `
      } else {
          return `
            ${''/* pins */}
            (pad 1 thru_hole circle 
              (at ${def_pos}2.54 -5.08) 
              (size 2.286 2.286) (drill 1.4986) 
              (layers *.Cu *.Mask))
            (pad 2 thru_hole circle 
              (at ${def_neg}3.81 -2.54) 
              (size 2.286 2.286) (drill 1.4986) 
              (layers *.Cu *.Mask) ${p.in})
          `
      }
    }

    if (p.preroute) {
      return `
        ${standard}
        ${p.keycaps ? keycap : ''}
        ${pins('-', '', 'B')}
        ${pins('', '-', 'F')})
        ${traces}
        `
    } else {
      return `
        ${standard}
        ${p.keycaps ? keycap : ''}
        ${pins('-', '', 'B')}
        ${pins('', '-', 'F')})
        `
    }
  }
}
