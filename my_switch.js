
// For JS202011AQN DPDT 300mA 6V switch
module.exports = {
  params: {
    designator: 'S',
    side: 'F',
    A: undefined,
    B: undefined,
    C: undefined,
    X: undefined,
    Y: undefined,
    Z: undefined,
  },
  body: p => {
    const standard = `
      (module CnK:JS202011AQN (layer F.Cu) (tstamp 5BF2CC94)
        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} 
          (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide 
          (effects (font (size 1.27 1.27) (thickness 0.15))))
    `;
    const pins = `
      (pad "1" thru_hole circle
        (at -2.5 -1.65 ${p.rot})
        (size 1.3 1.3)
        (drill 0.9 0.9)
        (layers *.Cu *.Mask)
        ${p.A})
      (pad "2" thru_hole circle
        (at 0 -1.65 ${p.rot})
        (size 1.3 1.3)
        (drill 0.9 0.9)
        (layers *.Cu *.Mask)
        ${p.B})
      (pad "3" thru_hole circle
        (at 2.5 -1.65 ${p.rot})
        (size 1.3 1.3)
        (drill 0.9 0.9)
        (layers *.Cu *.Mask)
        ${p.C})
      (pad "4" thru_hole circle
        (at -2.5 1.65 ${p.rot})
        (size 1.3 1.3)
        (drill 0.9 0.9)
        (layers *.Cu *.Mask)
        ${p.X})
      (pad "5" thru_hole circle
        (at 0 1.65 ${p.rot})
        (size 1.3 1.3)
        (drill 0.9 0.9)
        (layers *.Cu *.Mask)
        ${p.Y})
      (pad "6" thru_hole circle
        (at 2.5 1.65 ${p.rot})
        (size 1.3 1.3)
        (drill 0.9 0.9)
        (layers *.Cu *.Mask)
        ${p.Z})
    `;
    const outline = `
      (fp_line
        (start -4.25 -1.65)
        (end -4.25 1.65)
        (layer ${p.side}.SilkS)
        (width 0.15))
      (fp_line
        (start -4.25 1.65)
        (end 4.25 1.65)
        (layer ${p.side}.SilkS)
        (width 0.15))
      (fp_line
        (start 4.25 1.65)
        (end 4.25 -1.65)
        (layer ${p.side}.SilkS)
        (width 0.15))
      (fp_line
        (start 4.25 -1.65)
        (end -4.25 -1.65)
        (layer ${p.side}.SilkS)
        (width 0.15))
    `;
    const nibble = `
      (fp_line
        (start -1.75 -1.65)
        (end -1.75 -2.65)
        (layer Dwgs.User)
        (width 0.15))
      (fp_line
        (start -1.75 -2.65)
        (end -0.25 -2.65)
        (layer Dwgs.User)
        (width 0.15))
      (fp_line
        (start -0.25 -1.65)
        (end -0.25 -2.65)
        (layer Dwgs.User)
        (width 0.15))
    `;
    return `
      ${standard}
      ${pins}
      ${outline}
      ${nibble}
      )
    `;
  }
}
