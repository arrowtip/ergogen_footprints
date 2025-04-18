module.exports = {
    params: {
        designator: 'LED',
        VCC: {type: 'net', value: 'VCC'},
        dout: undefined,
        GND: {type: 'net', value: 'GND'},
        din: undefined,
    },
    body: p => `
(footprint "LED_WS2812B_PLCC4_5.0x5.0mm_P3.2mm"

  ${p.at /* parametric position */}

	(layer "F.Cu")
	(descr "5.0mm x 5.0mm Addressable RGB LED NeoPixel, https://cdn-shop.adafruit.com/datasheets/WS2812B.pdf")
	(tags "LED RGB NeoPixel PLCC-4 5050")
	(property "Reference" "REF**"
		(at 0 -3.5 ${p.rot})
		(layer "F.SilkS")
		(uuid "29976fa0-918e-48c1-ba81-319324267df7")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
		)
	)
	(property "Value" "LED_WS2812B_PLCC4_5.0x5.0mm_P3.2mm"
		(at 0 4 ${p.rot})
		(layer "F.Fab")
		(uuid "11f34c85-b80f-46bd-b71d-beeef7ef25a2")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
		)
	)
	(property "Footprint" ""
		(at 0 0 ${p.rot})
		(unlocked yes)
		(layer "F.Fab")
		(hide yes)
		(uuid "453956eb-d61b-4468-b399-3a349961be01")
		(effects
			(font
				(size 1.27 1.27)
			)
		)
	)
	(attr smd)
	(fp_line
		(start -3.65 -2.75)
		(end 3.65 -2.75)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "6ed77aa4-f296-4996-819b-3cc749559f49")
	)
	(fp_line
		(start -3.65 2.75)
		(end 3.65 2.75)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "ca1d06bb-c27e-4859-b633-e45a2345f320")
	)
	(fp_line
		(start 3.65 2.75)
		(end 3.65 1.6)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "e860fd23-f087-40be-9473-9d8e25d5ffe3")
	)

	(fp_line
		(start -3.45 -2.75)
		(end -3.45 2.75)
		(stroke
			(width 0.05)
			(type solid)
		)
		(layer "F.CrtYd")
		(uuid "e698f4d4-65a5-4d0f-a8ed-5745b8f0d483")
	)
	(fp_line
		(start -3.45 2.75)
		(end 3.45 2.75)
		(stroke
			(width 0.05)
			(type solid)
		)
		(layer "F.CrtYd")
		(uuid "2d2813ac-2cb3-426c-9318-d6eb3fef0d3b")
	)
	(fp_line
		(start 3.45 -2.75)
		(end -3.45 -2.75)
		(stroke
			(width 0.05)
			(type solid)
		)
		(layer "F.CrtYd")
		(uuid "3ed360c1-b7ac-408f-ae9c-5f158b031e9b")
	)
	(fp_line
		(start 3.45 2.75)
		(end 3.45 -2.75)
		(stroke
			(width 0.05)
			(type solid)
		)
		(layer "F.CrtYd")
		(uuid "62f632c6-6884-46e9-ac67-40d4696553e0")
	)

	(fp_line
		(start -2.5 -2.5)
		(end -2.5 2.5)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.Fab")
		(uuid "c0c389f3-e39a-48d8-966d-313f4224879e")
	)
	(fp_line
		(start -2.5 2.5)
		(end 2.5 2.5)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.Fab")
		(uuid "e4c74574-4660-4fc6-b56a-3f019923dc9c")
	)
	(fp_line
		(start 2.5 -2.5)
		(end -2.5 -2.5)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.Fab")
		(uuid "e2bf95a5-2ab1-44b7-8a52-0c672195a1d4")
	)
	(fp_line
		(start 2.5 1.5)
		(end 1.5 2.5)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.Fab")
		(uuid "bfb2b50f-e0ce-4bd4-b9e6-cca37d8e1b12")
	)
	(fp_line
		(start 2.5 2.5)
		(end 2.5 -2.5)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "F.Fab")
		(uuid "90c3ef5b-455e-4d2f-aa38-e0f89bf4bf0c")
	)
	(fp_circle
		(center 0 0)
		(end 0 -2)
		(stroke
			(width 0.1)
			(type solid)
		)
		(fill none)
		(layer "F.Fab")
		(uuid "83b9b0b3-69d5-4d55-b734-61b11225d74a")
	)

	(fp_text user "1"
		(at -4.15 -1.6 ${p.rot})
		(layer "F.SilkS")
		(uuid "d09dbb95-d0d6-4d24-828b-5464671de2a8")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
		)
	)

	(pad "1" smd roundrect
		(at -2.45 -1.65 ${p.rot})
		(size 1.8 1.0)
    (roundrect_rratio 0.5)
		(layers "F.Cu" "F.Paste" "F.Mask")
		(uuid "303fa036-5e50-4d6d-bb86-5cdfd4b88a9f")
    ${p.VCC.str}
	)
	(pad "2" smd roundrect
		(at -2.45 1.65 ${p.rot})
		(size 1.8 1.0)
    (roundrect_rratio 0.5)
		(layers "F.Cu" "F.Paste" "F.Mask")
		(uuid "19ff1e90-56ef-461a-889c-61ffea674474")
    ${p.dout.str}
	)
	(pad "3" smd roundrect
		(at 2.45 1.65 ${p.rot})
		(size 1.8 1.0)
    (roundrect_rratio 0.5)
		(layers "F.Cu" "F.Paste" "F.Mask")
		(uuid "abc776f0-6816-4443-a596-fad8645d4ac8")
    ${p.GND.str}
	)
	(pad "4" smd roundrect
		(at 2.45 -1.65 ${p.rot})
		(size 1.8 1.0)
    (roundrect_rratio 0.5)
		(layers "F.Cu" "F.Paste" "F.Mask")
		(uuid "e6e3b1bc-4064-4031-9b80-d1df61337d0a")
    ${p.din.str}
	)

  ${'' /* mirrored on bottom side */}
	(fp_line
		(start 3.65 -2.75)
		(end -3.65 -2.75)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "B.SilkS")
	)
	(fp_line
		(start 3.65 2.75)
		(end -3.65 2.75)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "B.SilkS")
	)
	(fp_line
		(start -3.65 2.75)
		(end -3.65 1.6)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "B.SilkS")
	)
	(fp_line
		(start 3.45 -2.75)
		(end 3.45 2.75)
		(stroke
			(width 0.05)
			(type solid)
		)
		(layer "B.CrtYd")
	)
	(fp_line
		(start 3.45 2.75)
		(end -3.45 2.75)
		(stroke
			(width 0.05)
			(type solid)
		)
		(layer "B.CrtYd")
	)
	(fp_line
		(start -3.45 -2.75)
		(end 3.45 -2.75)
		(stroke
			(width 0.05)
			(type solid)
		)
		(layer "B.CrtYd")
	)
	(fp_line
		(start -3.45 2.75)
		(end -3.45 -2.75)
		(stroke
			(width 0.05)
			(type solid)
		)
		(layer "B.CrtYd")
	)
	(fp_line
		(start 2.5 -2.5)
		(end 2.5 2.5)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "B.Fab")
	)
	(fp_line
		(start 2.5 2.5)
		(end -2.5 2.5)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "B.Fab")
	)
	(fp_line
		(start -2.5 -2.5)
		(end 2.5 -2.5)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "B.Fab")
	)
	(fp_line
		(start -2.5 1.5)
		(end -1.5 2.5)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "B.Fab")
	)
	(fp_line
		(start -2.5 2.5)
		(end -2.5 -2.5)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "B.Fab")
	)
	(fp_circle
		(center 0 0)
		(end 0 -2)
		(stroke
			(width 0.1)
			(type solid)
		)
		(fill none)
		(layer "B.Fab")
	)
	(fp_text user "1"
		(at 4.15 -1.6 ${p.rot})
		(layer "B.SilkS")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
      (justify mirror)
		)
	)
	(pad "1" smd roundrect
		(at 2.45 -1.65 ${p.rot})
		(size 1.8 1.0)
    (roundrect_rratio 0.5)
		(layers "B.Cu" "B.Paste" "B.Mask")
    ${p.VCC.str}
	)
	(pad "2" smd roundrect
		(at 2.45 1.65 ${p.rot})
		(size 1.8 1.0)
    (roundrect_rratio 0.5)
		(layers "B.Cu" "B.Paste" "B.Mask")
    ${p.dout.str}
	)
	(pad "3" smd roundrect
		(at -2.45 1.65 ${p.rot})
		(size 1.8 1.0)
    (roundrect_rratio 0.5)
		(layers "B.Cu" "B.Paste" "B.Mask")
    ${p.GND.str}
	)
	(pad "4" smd roundrect
		(at -2.45 -1.65 ${p.rot})
		(size 1.8 1.0)
    (roundrect_rratio 0.5)
		(layers "B.Cu" "B.Paste" "B.Mask")
    ${p.din.str}
	)
)
        `
}
