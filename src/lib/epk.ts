export const site = {
  artist: "Abir Biswas",
  artistFull: "Abir Biswas Live",
  role: "Sound Engineer",
  tagline:
    "Fusion rock powered by a full live production crew. Let's make it an absolute hit.",
  manager: "Susmita Bhowmick",
  managerPhone: "+91 7003238118",
  managerWhatsApp: "+91 7003238118",
  managerEmail: "abirbiswaslive@gmail.com",
  youtube: "https://www.youtube.com/AbirBiswas",
  facebook: "https://www.facebook.com/abirbiswasofficial",
  instagram: "https://www.instagram.com/theabirbiswas",
} as const;

export const riderContact = {
  manager: "Susmita Bhowmick",
  managerPhone: "+91 7003238118",
  managerEmail: "abirbiswaslive@gmail.com",
  soundEngineer: "Sangit Mondal",
  soundEngineerPhone: "+91 6291640585",
  soundEngineerEmail: "mondalsangit1995@gmail.com",
} as const;

export const band = {
  name: "Abir Biswas Live",
  members: 9,
  tech: {
    inputList: [
      ["CH 1", "KICK IN"],
      ["CH 2", "KICK OUT"],
      ["CH 3", "SNR TOP"],
      ["CH 4", "SNR BTM"],
      ["CH 5", "HAT"],
      ["CH 6", "1 TOM"],
      ["CH 7", "2 TOM"],
      ["CH 8", "FL TOM"],
      ["CH 9,10", "OVERHEAD"],
      ["CH 11,12", "OCTAPAD"],
      ["CH 13,14", "HAND SONIC"],
      ["CH 15", "BHANGRA CHATI"],
      ["CH 16", "BHANGRA BAYA"],
      ["CH 17", "DARBUKA"],
      ["CH 18", "BASS"],
      ["CH 19,20", "KEYBOARD"],
      ["CH 21,22", "GUITAR"],
      ["CH 23,24", "ABIR GUITAR"],
      ["CH 25", "ABIR HEAD-WORN MIC"],
      ["CH 26", "ABIR WIRELESS MIC"],
      ["CH 27", "KEY BACK VOCAL"],
      ["CH 28", "GTR BACK VOCAL"],
      ["CH 29", "KEY TB"],
      ["CH 30", "GTR TB"],
      ["CH 31", "DRUM TB"],
      ["CH 32", "MC"],
      ["CH 33,34", "OR LOCAL 1,2 AV"],
      ["LOCAL 3", "CONSOLE TB"],
    ],
    outputList: [
      ["AUX 1,2", "DRUM INEAR"],
      ["AUX 3,4", "PER INEAR"],
      ["AUX 5,6", "BASS INEAR"],
      ["AUX 7,8", "KEY INEAR"],
      ["AUX 9,10", "GTR INEAR"],
      ["AUX 11,12", "VOCAL INEAR"],
      ["AUX 13", "VOCAL WEDGE"],
      ["AUX 14", "DRUM SUB"],
      ["AUX 15,16", "SIDE FILL"],
      ["AUX 17", "SIDE FILL SUB"],
      ["LOCAL 1", "SHOUT MONITOR"],
    ],
  },
} as const;

export const rider = {
  paSystem: {
    coverage: "120 dB SPL (A weighting)",
    preferences: [
      { brand: "RCF", models: "TTL, HDL-30, HDL-20 with paired Sub" },
      { brand: "Das", models: "Lara, Aero, Event series with paired Sub" },
      { brand: "JBL", models: "VTX Series / Vertec Series with paired Sub" },
    ],
    notes: [
      "All P.A. and Monitor systems must be protected with Limiter or necessary protection system. If there is no limiter or protection system, the sound engineer takes no blame for any speaker or system damage during or after the show.",
      "All Subs must feed via Crossover (80 Hz), Center distributed Cardioid.",
      "If needed, use sufficient delay speakers for even coverage throughout the venue.",
      "System should be time aligned and in phase with a linear 'Flat' frequency response.",
    ],
  },
  monitoring: {
    intro:
      "6 Sennheiser G4 / 2000 and 4 Vocal Wedges and a pair of side fill (SRX725 with 728)",
    preferred: "PRX-815 / SRX-915 or Better",
    notes: [
      "Input sensitivity: -12",
      "All in-ear monitors should be stereo.",
      "No hi boost.",
      "Volume boost +6dB.",
    ],
  },
  console: {
    brands: [
      { brand: "Behringer", models: "Wing (with two stage box, must)" },
      { brand: "Allen & Heath", models: "D-Live (3500 or 7000) / Avantis" },
      { brand: "Avid", models: "SC48" },
    ],
    notes: [
      "The F.O.H. console should be placed in the center of the venue (minimum 50 feet from the P.A.) where the PA system forms an equilateral triangle with the console.",
    ],
  },
  stage: {
    riser: "8' x 8' x 1' Drums Riser must be needed.",
    stands:
      "1 Bass Guitar Stand, 3 Guitar Stands, 1 Keyboard Stand, 2 Lyrics Stands must be needed.",
  },
  equipment: [
    {
      section: "DRUMS",
      items: [
        "Bass Drum Mic – 2 Kick Drum Mic (In Mic - Beta 91, Out Mic - Beta 52A)",
        "Snare Mic – 2 Snare Drum Mic (Top / Bottom SM57)",
        "Hi-hat – 1 Cardioid Condenser Mic",
        "Tom Mic – 3 Tom Mic (e604)",
        "Overhead – 2 Cardioid Condenser Mic",
      ],
    },
    {
      section: "PERCUSSION",
      items: [
        "DI - 2 DI (Radial / BSS)",
        "Darbuka - Shure SM57",
        "Bhangra - Shure SM57, Shure SM58",
      ],
    },
    {
      section: "OCTAPAD",
      items: ["DI - 2 DI (Radial / BSS)"],
    },
    {
      section: "GUITAR",
      items: ["DI - 4 DI (Radial / BSS)"],
    },
    {
      section: "KEYBOARD",
      items: ["DI - 2 DI (Radial / BSS), 1 Keyboard Stand"],
    },
    {
      section: "BASS",
      items: ["DI - 1 DI (Radial / BSS)"],
    },
  ],
  vocal: {
    lead:
      "2 Wireless Handheld Mic Shure QLXD Beta58, 1 Shure SM39/SM35 Headworn Mic with desired transmitter & receiver",
    backup: "2 Wired Beta-58 (With Switch Must)",
    talkback: "3 Wired Mic (With Switch Must)",
  },
  backline: {
    drumKit:
      "5 Piece kit with 1 rack tom, 2 floor toms along with Zildjian K / A Custom Cymbals (including hi-hat, crashes, ride, splash and china. With a Double Bass-Drum Pedal).",
    preferredKits:
      "DW: Collector / Performance Series · Pearl: Master / Reference · Tama: Starclassic",
    drumThrone: "1 Height Adjustable Heavy Duty Drum Throne",
    percussion: ["Djembe (Remo / Clapbox / Meinl)", "Bhangra Dhol", "Necessary stands and equipment for this."],
  },
  electricity:
    "The stage electricity must be earthed properly and routed through a diesel generator.",
  terms: [
    "Make sure that the PA speakers are completely tuned and all the cables and lines should be checked according to the patch list before the band comes in.",
    "We require minimum 2 (two) tech guys on the stage, who should be well equipped and aware of system.",
    "Band requires a minimum 2 (two) hours of soundcheck after complete load-in and setup.",
    "The stage / FOH power source must be earthed and on a separate generator / source from the lighting source.",
    "The backline and microphones must be same as per attached.",
    "Please forward a copy of this list to the sound vendor and ask them to confirm us the availability of the equipment mentioned.",
  ],
  hospitality: {
    accommodation:
      "5 twin sharing double bed AC rooms required for 9 members. All rooms must be booked in a good hotel property.",
    greenroom:
      "Clean greenrooms with toilet facility must be provided to the band before sound check and no one should enter without permission.",
    food: "Band members and crew prefer non-vegetarian meals. All meals should be organised in the hotel for the band and its crew soon after they arrive at the hotel. Individual room service or buffet or hotel's own restaurant is acceptable.",
    duringSoundcheck: [
      "2 cartons of 500ml mineral water",
      "Coffee or Tea",
      "Light snacks like biscuits, cake, sandwiches etc.",
    ],
    duringShow: [
      "2 cartons of 500ml mineral water",
      "10 Pcs of Redbull can & 10 ORSL",
    ],
    travel: {
      flights: "9 flight tickets which includes band members, manager, sound engineer and crew.",
      ground:
        "For ground transport outstation, 2 SUVs (Preferred model – Innova Crysta / Scorpio) should be there.",
      drivers:
        "All drivers must know the address, directions, name of hotel, venue and airport. Drivers must be informed of the timing for station / airport pick up and drop.",
    },
  },
  financial: [
    "Sound check: The band will require a minimum of 2 hours for sound check. This 2 hour period will begin only after all backline gear is in position and operational on stage.",
    "All inputs must be line checked and the FOH systems must be fully functional and in show ready state.",
    "Full payment have to be cleared before stage (after entering the spot).",
    "Cooperation with photographers and band managers is highly expected.",
    "In case of any cancellation the advance is non-refundable.",
    "In case of date change, advance will be adjusted if the venue remains the same and we will cooperate with you as much as we can do but that will be a matter of discussion and negotiation.",
    "If there is train / flight as transportation, the fare should be borne by the client. The train / flight fare is not included in the band payment.",
  ],
} as const;
