module.exports = {
  params: {
      designator: 'D',
      from: undefined,
      to: undefined,
      side: 'both',
  },
  body: p => {
    const standard = `
      (module ComboDiode (layer F.Cu) (tedit 5B24D78E)
        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) 
          (layer F.SilkS) ${p.ref_hide} 
          (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) 
          (layer F.SilkS) hide 
          (effects (font (size 1.27 1.27) (thickness 0.15))))

        ${''/* THT terminals */}
        (pad 1 thru_hole rect 
          (at -3.81 0 ${p.r}) (size 1.778 1.778) (drill 0.9906) 
          (layers *.Cu *.Mask) ${p.to})
        (pad 2 thru_hole circle 
          (at 3.81 0 ${p.r}) (size 1.905 1.905) (drill 0.9906) 
          (layers *.Cu *.Mask) ${p.from})
    `;
    const pads = (side) => {
      return `
        (pad 1 smd rect 
          (at -1.65 0 ${p.r}) (size 0.9 1.2) 
          (layers ${side}.Cu ${side}.Paste ${side}.Mask) ${p.to})
        (pad 2 smd rect 
          (at 1.65 0 ${p.r}) (size 0.9 1.2) 
          (layers ${side}.Cu ${side}.Paste ${side}.Mask) ${p.from})
      `;
    };
    const silkscreen = (side) => {
      return `
        (fp_line (start 0.25 0) (end 0.75 0) (layer ${side}.SilkS) (width 0.1))
        (fp_line (start 0.25 0.4) (end -0.35 0) (layer ${side}.SilkS) (width 0.1))
        (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer ${side}.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end 0.25 -0.4) (layer ${side}.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end -0.35 0.55) (layer ${side}.SilkS) (width 0.1))
        (fp_line (start -0.35 0) (end -0.35 -0.55) (layer ${side}.SilkS) (width 0.1))
        (fp_line (start -0.75 0) (end -0.35 0) (layer ${side}.SilkS) (width 0.1))
      `;
    };
    
    if (p.side == 'both') {
      return `
        ${standard}
        ${pads('F')}
        ${pads('B')}
        ${silkscreen('F')}
        ${silkscreen('B')}
        )
      `;
    } else {
      return `
        ${standard}
        ${pads(p.side)}
        ${silkscreen(p.side)}
        )
      `;
    }
  }
}
