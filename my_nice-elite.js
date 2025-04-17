// combined footprint for nice!nano v2 and elite-c footprint
// This is a 3.3V micro controller!
// Params
//  orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb

module.exports = {
  params: {
    designator: 'MCU',
    orientation: 'down',
    side: 'both',
    trace_width: 0.5,
    B_PLUS: {type: 'net', value: 'B_PLUS'},
    GND: {type: 'net', value: 'GND'},
    RST: {type: 'net', value: 'RST'},
    VCC: {type: 'net', value: 'VCC'},
    D21: {type: 'net', value: 'D21'},
    D20: {type: 'net', value: 'D20'},
    D19: {type: 'net', value: 'D19'},
    D18: {type: 'net', value: 'D18'},
    D15: {type: 'net', value: 'D15'},
    D14: {type: 'net', value: 'D14'},
    D16: {type: 'net', value: 'D16'},
    D10: {type: 'net', value: 'D10'},
    D1: {type: 'net', value: 'D1'},
    D0: {type: 'net', value: 'D0'},
    D2: {type: 'net', value: 'D2'},
    D3: {type: 'net', value: 'D3'},
    D4: {type: 'net', value: 'D4'},
    D5: {type: 'net', value: 'D5'},
    D6: {type: 'net', value: 'D6'},
    D7: {type: 'net', value: 'D7'},
    D8: {type: 'net', value: 'D8'},
    D9: {type: 'net', value: 'D9'},
    P1_01: {type: 'net', value: 'P1_01'},
    P1_02: {type: 'net', value: 'P1_02'},
    P1_07: {type: 'net', value: 'P1_07'},
    E_F0: {type: 'net', value: 'E_F0'},
    E_F1: {type: 'net', value: 'E_F1'},
  },
  body: p => {
    const standard = `
      (module NiceNano (layer F.Cu) (tedit 5B307E4C)
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
    
      ${''/* illustration of USB port overhang */}
      (fp_line 
        (start -19 -3.81) 
        (end -14.224 -3.81) 
        (layer Dwgs.User) 
        (width 0.15))
      (fp_line 
        (start -19 3.81) 
        (end -19 -3.81) 
        (layer Dwgs.User) 
        (width 0.15))
      (fp_line 
        (start -14.224 3.81) 
        (end -19 3.81) 
        (layer Dwgs.User) 
        (width 0.15))
      (fp_line 
        (start -14.224 -3.81) 
        (end -14.224 3.81) 
        (layer Dwgs.User) 
        (width 0.15))
      `;

    function silkscreen(def_neg, def_pos, side) {
      const mirror = side == 'B' ? ' (justify mirror)' : '';
      return `
        ${''/* extra border around "RAW" */}
        (fp_line 
          (start -15.24 ${def_pos}6.35) 
          (end -12.7 ${def_pos}6.35) 
          (layer ${side}.SilkS) 
          (width 0.15))
        (fp_line 
          (start -15.24 ${def_pos}6.35) 
          (end -15.24 ${def_pos}9) 
          (layer ${side}.SilkS) 
          (width 0.15))
        (fp_line 
          (start -12.7 ${def_pos}6.35) 
          (end -12.7 ${def_pos}9) 
          (layer ${side}.SilkS) 
          (width 0.15))

        ${''/* component outline */}
        (fp_line 
          (start -18 9) 
          (end 15.5 9) 
          (layer ${side}.SilkS) 
          (width 0.15))
        (fp_line 
          (start 15.5 9) 
          (end 15.5 -9) 
          (layer ${side}.SilkS) 
          (width 0.15))
        (fp_line 
          (start 15.5 -9) 
          (end -18 -9) 
          (layer ${side}.SilkS) 
          (width 0.15))
        (fp_line 
          (start -18 -9) 
          (end -18 9) 
          (layer ${side}.SilkS) 
          (width 0.15))
      
        ${''/* pin names */}
        (fp_text user B+ 
          (at -13.97 ${def_pos}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15)) ${mirror}))
        (fp_text user GND 
          (at -11.43 ${def_pos}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15))${mirror}))
        (fp_text user RST 
          (at -8.89 ${def_pos}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15))${mirror}))
        (fp_text user VCC 
          (at -6.35 ${def_pos}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15))${mirror}))
        (fp_text user D21 
          (at -3.81 ${def_pos}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15))${mirror}))
        (fp_text user D20 
          (at -1.27 ${def_pos}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15))${mirror}))
        (fp_text user D19 
          (at 1.27 ${def_pos}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15))${mirror}))
        (fp_text user D18 
          (at 3.81 ${def_pos}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15))${mirror}))
        (fp_text user D15 
          (at 6.35 ${def_pos}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15))${mirror}))
        (fp_text user D14 
          (at 8.89 ${def_pos}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15))${mirror}))
        (fp_text user D16 
          (at 11.43 ${def_pos}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15))${mirror}))
        (fp_text user D10 
          (at 12.72 ${def_pos}6.36 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.5 0.5) (thickness 0.15))${mirror}))
      
        (fp_text user D1 
          (at -13.97 ${def_neg}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15))${mirror}))
        (fp_text user D0 
          (at -11.43 ${def_neg}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15))${mirror}))
        (fp_text user GND 
          (at -8.89 ${def_neg}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15))${mirror}))
        (fp_text user GND 
          (at -6.35 ${def_neg}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15))${mirror}))
        (fp_text user D2 
          (at -3.81 ${def_neg}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15))${mirror}))
        (fp_text user D3 
          (at -1.27 ${def_neg}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15))${mirror}))
        (fp_text user D4 
          (at 1.27 ${def_neg}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15))${mirror}))
        (fp_text user D5 
          (at 3.81 ${def_neg}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15))${mirror}))
        (fp_text user D6 
          (at 6.35 ${def_neg}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15))${mirror}))
        (fp_text user D7 
          (at 7.64 ${def_neg}6.36 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.5 0.5) (thickness 0.1))${mirror}))
        (fp_text user D8 
          (at 11.43 ${def_neg}4.8 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.8 0.8) (thickness 0.15))${mirror}))
        (fp_text user D9
          (at 12.72 ${def_neg}6.36 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.5 0.5) (thickness 0.15))${mirror}))

        (fp_text user "P1.01"
          (at 10.4 ${def_neg}5.08 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.5 0.5) (thickness 0.1))${mirror}))
        (fp_text user "P1.02"
          (at 10.5 ${def_neg}2.54 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.5 0.5) (thickness 0.1))${mirror}))
        (fp_text user "P1.07"
          (at 10.5 ${def_neg}0 ${p.r + 90}) 
          (layer ${side}.SilkS) 
          (effects (font (size 0.5 0.5) (thickness 0.1))${mirror}))
      `;

    }
    function pins(def_neg, def_pos) {
      return `
        ${''/* and now the actual pins */}
        (pad 1 thru_hole rect 
          (at -13.97 ${def_pos}7.62 ${p.r}) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.B_PLUS})
        (pad 2 thru_hole circle 
          (at -11.43 ${def_pos}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.GND})
        (pad 3 thru_hole circle 
          (at -8.89 ${def_pos}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.RST})
        (pad 4 thru_hole circle 
          (at -6.35 ${def_pos}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.VCC})
        (pad 5 thru_hole circle 
          (at -3.81 ${def_pos}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.D21})
        (pad 6 thru_hole circle 
          (at -1.27 ${def_pos}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.D20})
        (pad 7 thru_hole circle 
          (at 1.27 ${def_pos}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.D19})
        (pad 8 thru_hole circle 
          (at 3.81 ${def_pos}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.D18})
        (pad 9 thru_hole circle 
          (at 6.35 ${def_pos}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.D15})
        (pad 10 thru_hole circle 
          (at 8.89 ${def_pos}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.D14})
        (pad 11 thru_hole circle 
          (at 11.43 ${def_pos}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.D16})
        (pad 12 thru_hole circle 
          (at 13.97 ${def_pos}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.D10})
        
        (pad 13 thru_hole circle 
          (at -13.97 ${def_neg}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.D1})
        (pad 14 thru_hole circle 
          (at -11.43 ${def_neg}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.D0})
        (pad 15 thru_hole circle 
          (at -8.89 ${def_neg}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.GND})
        (pad 16 thru_hole circle 
          (at -6.35 ${def_neg}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.GND})
        (pad 17 thru_hole circle 
          (at -3.81 ${def_neg}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.D2})
        (pad 18 thru_hole circle 
          (at -1.27 ${def_neg}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.D3})
        (pad 19 thru_hole circle 
          (at 1.27 ${def_neg}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.D4})
        (pad 20 thru_hole circle 
          (at 3.81 ${def_neg}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.D5})
        (pad 21 thru_hole circle 
          (at 6.35 ${def_neg}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.D6})
        (pad 22 thru_hole circle 
          (at 8.89 ${def_neg}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.D7})
        (pad 23 thru_hole circle 
          (at 11.43 ${def_neg}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.D8})
        (pad 24 thru_hole circle 
          (at 13.97 ${def_neg}7.62 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.D9})

        (pad 25 thru_hole circle 
          (at 8.89 ${def_neg}5.08 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.P1_01})
        (pad 26 thru_hole circle 
          (at 8.89 ${def_neg}2.54 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.P1_02})
        (pad 27 thru_hole circle 
          (at 8.89 ${def_neg}0 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.P1_07})

        
        (pad 28 thru_hole circle 
          (at 13.97 ${def_neg}5.08 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.P1_01})
        (pad 29 thru_hole circle 
          (at 13.97 ${def_neg}2.54 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.P1_02})
        (pad 30 thru_hole circle 
          (at 13.97 ${def_neg}0 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.P1_07})
        (pad 31 thru_hole circle 
          (at 13.97 ${def_pos}2.54 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.E_F1})
        (pad 32 thru_hole circle 
          (at 13.97 ${def_pos}5.08 0) 
          (size 1.7 1.7) 
          (drill 1.0) 
          (layers *.Cu *.SilkS *.Mask) 
          ${p.E_F0})
      `;
    }
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
    const traces = (def_neg) => {
      return `
      (segment
        (start ${adjust_point(13.97, def_neg * 5.08)})
        (end ${adjust_point(8.89, def_neg * 5.08)})
        (width ${p.trace_width})
        (layer "F.Cu")
        (net 1)
      )
      (segment
        (start ${adjust_point(13.97, def_neg * 2.54)})
        (end ${adjust_point(8.89, def_neg * 2.54)})
        (width ${p.trace_width})
        (layer "F.Cu")
        (net 2)
      )
      (segment
        (start ${adjust_point(13.97, 0)})
        (end ${adjust_point(8.89, 0)})
        (width ${p.trace_width})
        (layer "F.Cu")
        (net 3)
      )
    `;
    }
    const def_neg = p.orientation == 'down' ? '-' : '';
    const def_pos = p.orientation == 'down' ? '' : '-';
    const def_neg_num = p.orientation == 'down' ? -1 : 1;
    if (p.side == 'both') {
      return `
        ${standard}
        ${pins(def_neg, def_pos)}
        ${silkscreen(def_neg, def_pos, 'F')}
        ${silkscreen(def_neg, def_pos, 'B')}
        )
        ${traces(def_neg_num)}
      `;
    } else {
      return `
        ${standard}
        ${pins(def_neg, def_pos)}
        ${silkscreen(def_neg, def_pos, p.side)}
        )
        ${traces(def_neg_num)}
        `;
    }
  }
}
