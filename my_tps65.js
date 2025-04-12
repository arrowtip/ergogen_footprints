// Azoteq TPS65 Trackpad
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//
//

module.exports = {
  params: {
    designator: 'P',
    outline: true,
    side: 'F',
    conn_dist: 24,
    rdy: {type: 'net', value: 'RDY'},
    nrst: {type: 'net', value: 'NRST'},
    gnd: {type: 'net', value: 'GND'},
    v_in: {type: 'net', value: '3V3'},
    scl: {type: 'net', value: 'SCL'},
    sda: {type: 'net', value: 'SDA'},
  },
  body: p => {
    const standard = `
      (module TPS65 (layer F.Cu) (tedit 5DD50112)
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
    `
    get_dist = (x) => {
      return p.conn_dist + x;
    };

    const connector = `
      ${'' /* footprint based on FPC-05F-6PH20 */}
      (pad "1" smd rect
        (at 5.75 -${p.conn_dist} ${p.rot})
        (size 0.3 1.25)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
        ${p.rdy.str}
      )
      (pad "2" smd rect
        (at 6.25 -${p.conn_dist} ${p.rot})
        (size 0.3 1.25)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
        ${p.nrst.str}
      )
      (pad "3" smd rect
        (at 6.75 -${p.conn_dist} ${p.rot})
        (size 0.3 1.25)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
        ${p.gnd.str}
      )
      (pad "4" smd rect
        (at 7.25 -${p.conn_dist} ${p.rot})
        (size 0.3 1.25)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
        ${p.v_in.str}
      )
      (pad "5" smd rect
        (at 7.75 -${p.conn_dist} ${p.rot})
        (size 0.3 1.25)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
        ${p.scl.str}
      )
      (pad "6" smd rect
        (at 8.25 -${p.conn_dist} ${p.rot})
        (size 0.3 1.25)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
        ${p.sda.str}
      )
      (pad "MP" smd rect
        (at 4.06 -${get_dist(-2.575)} ${p.rot})
        (size 2 2.5)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
      )
      (pad "MP" smd rect
        (at 9.94 -${get_dist(-2.575)} ${p.rot})
        (size 2 2.5)
        (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")
      )
      (fp_circle
        (center 4.95 -${get_dist(0.5)})
        (end 5.2 -${get_dist(0.5)})
        (layer "${p.side}.SilkS")
        (fill yes)
      )
      (fp_line
        (start 5.35 -${get_dist(-0.2)})
        (end 3.06 -${get_dist(-0.2)})
        (layer "${p.side}.SilkS")
        (width 0.15)
      )
      (fp_line
        (start 3.06 -${get_dist(-0.2)})
        (end 3.06 -${get_dist(-1.1)})
        (layer "${p.side}.SilkS")
        (width 0.15)
      )
      (fp_line
        (start 3.06 -${get_dist(-4)})
        (end 3.06 -${get_dist(-6.1)})
        (layer "${p.side}.SilkS")
        (width 0.15)
      )
      (fp_line
        (start 3.06 -${get_dist(-6.1)})
        (end 10.94 -${get_dist(-6.1)})
        (layer "${p.side}.SilkS")
        (width 0.15)
      )
      (fp_line
        (start 3.06 -${get_dist(-5.1)})
        (end 10.94 -${get_dist(-5.1)})
        (layer "${p.side}.SilkS")
        (width 0.15)
      )
      (fp_line
        (start 10.94 -${get_dist(-4)})
        (end 10.94 -${get_dist(-6.1)})
        (layer "${p.side}.SilkS")
        (width 0.15)
      )
      (fp_line
        (start 10.94 -${get_dist(-0.2)})
        (end 10.94 -${get_dist(-1.1)})
        (layer "${p.side}.SilkS")
        (width 0.15)
      )
      (fp_line
        (start 10.94 -${get_dist(-0.2)})
        (end 8.65 -${get_dist(-0.2)})
        (layer "${p.side}.SilkS")
        (width 0.15)
      )
    `
    const outline = `
      ${''/* outline hint (65x49mm, 3mm corner fillets)*/}
      (fp_line (start -29.5 -24.5) (end 29.5 -24.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 32.5 -21.5) (end 32.5 21.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 29.5 24.5) (end -29.5 24.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -32.5 21.5) (end -32.5 -21.5) (layer Dwgs.User) (width 0.15))
      (fp_arc
        (start -29.5 -21.5)
        (end -32.5 -21.5)
        (angle 90)
        (layer Dwgs.User)
        (width 0.15)
      )
      (fp_arc
        (start 29.5 -21.5)
        (end 29.5 -24.5)
        (angle 90)
        (layer Dwgs.User)
        (width 0.15)
      )
      (fp_arc
        (start -29.5 21.5)
        (end -29.5 24.5)
        (angle 90)
        (layer Dwgs.User)
        (width 0.15)
      )
      (fp_arc
        (start 29.5 21.5)
        (end 32.5 21.5)
        (angle 90)
        (layer Dwgs.User)
        (width 0.15)
      )
      ${'' /* fpc connector on trackpad */}
      (fp_line 
        (start 2.5 9.5) 
        (end 11.5 9.5) 
        (layer Dwgs.User) 
        (width 0.15)
      )
      (fp_line 
        (start 11.5 9.5) 
        (end 11.5 14.5) 
        (layer Dwgs.User) 
        (width 0.15)
      )
      (fp_line 
        (start 11.5 14.5) 
        (end 2.5 14.5) 
        (layer Dwgs.User) 
        (width 0.15)
      )
      (fp_line 
        (start 2.5 14.5) 
        (end 2.5 9.5) 
        (layer Dwgs.User) 
        (width 0.15)
      )
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

    return `
      ${standard}
      ${p.outline ? outline : ''}
      ${connector}
      )
      `
  }
}

