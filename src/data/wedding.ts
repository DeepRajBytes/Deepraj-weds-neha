export interface WeddingEvent {
  id: string;
  title: string;
  hindiTithi: string;
  date: string;
  time?: string;
  description: string;
  category: 'primary' | 'manglik' | 'main';
  iconType: 'pooja' | 'sunderkand' | 'mataji' | 'mandap' | 'haldi' | 'gangoj' | 'mousara' | 'pritibhoj' | 'barat' | 'lagna';
}

export interface CoupleMember {
  label: string;
  name: string;
  grandParents: string;
  parents: string;
  gotraFamily: string;
  village: string;
  district: string;
}

export interface CoupleData {
  displayName: string;
  englishName: string;
  shloka: string;
  invitationPoem1: string;
  invitationPoem2: string;
  groom: CoupleMember;
  bride: CoupleMember;
}

export interface BaratData {
  title: string;
  date: string;
  day: string;
  departureTime: string;
  destination: string;
  fullNote: string;
}

export interface MainEventData {
  title: string;
  subTitle: string;
  date: string;
  day: string;
  time: string;
  year: string;
  venue: string;
  addressLine1: string;
  addressLine2: string;
  mapsQuery: string;
  mapsUrl: string;
}

export interface RelativeGroup {
  title: string;
  residence?: string;
  members: string[];
}

export interface WeddingData {
  invitationKicker: string;
  ganeshaShloka: string;
  ganeshaBlessing: string;
  invitationTitle: string;
  invitationSubtitle: string;
  invitationCta: string;
  couple: CoupleData;
  eventsSectionTitle: string;
  eventsSectionSubtitle: string;
  manglikSectionTitle: string;
  manglikSectionSubtitle: string;
  events: WeddingEvent[];
  mousara: {
    title: string;
    date: string;
    time: string;
    hosts: string;
    residence: string;
    note: string;
  };
  barat: BaratData;
  mainEvent: MainEventData;
  familySectionTitle: string;
  familySectionSubtitle: string;
  vineet: {
    title: string;
    members: string[];
    phone: string;
    firm: string;
  };
  shubhechhu: {
    title: string;
    head: string;
    members: string[];
    address: string;
    phone: string;
  };
  nanihalPaksh: {
    title: string;
    residence: string;
    members: string[];
    children: string;
  };
  darshanabhilashi: {
    title: string;
    groups: { location: string; names: string }[];
  };
  visheshAagrah: {
    title: string;
    residence: string;
    members: string[];
  };
  swagatakshuk: {
    title: string;
    residence: string;
    members: string[];
  };
  bhanej: {
    title: string;
    residence: string;
    members: string[];
  };
  balManuhar: {
    title: string;
    poem: string;
    children: string[];
  };
  commercialFirms: string[];
  closingMessage: string;
  closingSalutation: string;
  audioPath: string;
  weddingDateISO: string;
}

export const weddingData: WeddingData = {
  invitationKicker: "॥ श्री गणेशाय नमः ॥",
  ganeshaShloka: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
  ganeshaBlessing: "परमपिता परमेश्वर की असीम कृपा से हमारे परिवार में शुभ अवसर आया है, प्रसंग है हमारा लाड़ला...",
  invitationTitle: "मंगल परिणयोत्सव",
  invitationSubtitle: "सत्कार की थाली में चन्दन सा आदर, कुमकुम सी आस्था पुष्प सा प्रेम व अक्षत सा समर्पण लिए प्रफुल्लित मन से आपको सादर आमंत्रित करते हैं..",
  invitationCta: "आमंत्रण स्वीकार करें",
  couple: {
    displayName: "चि. दीपराज संग सौ. का. नेहा",
    englishName: "Deepraj Weds Neha",
    shloka: "॥ मङ्गलम् भगवान विष्णुः मङ्गलम् गरुडध्वजः। मङ्गलम् पुण्डरीकाक्षः मङ्गलाय तनो हरिः ॥",
    invitationPoem1: "मिलन हे दो परिवारों का, रस्म हे खुशी मनाने का।\nहमें तो इंतजार हे, शादी में आपके आने का॥",
    invitationPoem2: "सत्कार की थाली में चन्दन सा आदर, कुमकुम सी आस्था पुष्प सा प्रेम व अक्षत सा समर्पण लिए प्रफुल्लित मन से आपको सादर आमंत्रित करते हैं..",
    groom: {
      label: "वर (Groom)",
      name: "चि. दीपराज",
      grandParents: "सुपौत्र: श्री बालाराम जी - सौ. सोहन बाई",
      parents: "सुपुत्र: श्री ईश्वरलाल जी - सौ. चन्द्रप्रभा",
      gotraFamily: "सेन (चौहान) परिवार",
      village: "ग्राम-कलालिया, तह.-जावरा",
      district: "जिला-रतलाम (म.प्र.)",
    },
    bride: {
      label: "वधू (Bride)",
      name: "सौ. का. नेहा",
      grandParents: "सुपौत्री: श्री कारूलाल जी - सौ. रामकुंवर बाई",
      parents: "सुपुत्री: श्री बद्रीलाल जी - सौ. सीमा",
      gotraFamily: "सेन (परमार) परिवार",
      village: "ग्राम-अर्निया गुर्जर",
      district: "जिला-रतलाम (म.प्र.)",
    },
  },
  eventsSectionTitle: "शुभ बेलाएं",
  eventsSectionSubtitle: "पावन विवाह महोत्सव कार्यक्रम विवरण",
  manglikSectionTitle: "मांगलिक कार्यक्रम",
  manglikSectionSubtitle: "पारंपरिक रीति-रिवाज, गंगौज एवं मौसारा",
  events: [
    {
      id: "ganesh-poojan",
      title: "गणेश पूजन",
      hindiTithi: "मिती कार्तिक सुदी पूर्णिमा, मंगलवार",
      date: "24 नवंबर 2026",
      category: "primary",
      iconType: "pooja",
      description: "॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    },
    {
      id: "sunderkand",
      title: "सुन्दरकाण्ड पाठ",
      hindiTithi: "मिती अगहन सुदी 01, बुधवार",
      date: "25 नवंबर 2026",
      time: "शाम को",
      category: "primary",
      iconType: "sunderkand",
      description: "॥ अतुलितबलधामं हेमशैलाभदेहं दनुजवनकृशानुं ज्ञानिनामग्रगण्यम्। सकलगुणनिधानं वानराणामधीशं रघुपतिप्रियभक्तं वातजातं नमामि॥",
    },
    {
      id: "mataji-poojan",
      title: "माताजी पूजन",
      hindiTithi: "मिती अगहन सुदी 02, गुरुवार",
      date: "26 नवंबर 2026",
      category: "primary",
      iconType: "mataji",
      description: "॥ सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके। शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥",
    },
    {
      id: "mandap",
      title: "मण्डप प्रतिष्ठा",
      hindiTithi: "मिती अगहन सुदी 02, गुरुवार",
      date: "26 नवंबर 2026",
      time: "शाम 05:00 बजे",
      category: "primary",
      iconType: "mandap",
      description: "॥ मङ्गलम् भगवान विष्णुः मङ्गलम् गरुडध्वजः। मङ्गलम् पुण्डरीकाक्षः मङ्गलाय तनो हरिः॥",
    },
    {
      id: "haldi-sangeet",
      title: "हल्दी व महिला संगीत",
      hindiTithi: "मिती अगहन सुदी 02, गुरुवार",
      date: "26 नवंबर 2026",
      time: "शाम 08:00 बजे",
      category: "primary",
      iconType: "haldi",
      description: "॥ हरिद्रालेपनं दिव्यं कान्तिदं मङ्गलं परम्। सौभाग्यवर्धनं नित्यं दम्पत्योः प्रीतये सदा॥",
    },
    {
      id: "gangoj-gyaras",
      title: "घरविवाह - गंगौज, ग्यारस",
      hindiTithi: "मिती अगहन सुदी 03, शुक्रवार",
      date: "27 नवंबर 2026",
      time: "प्रातः 09:00 बजे",
      category: "manglik",
      iconType: "gangoj",
      description: "॥ गङ्गे च यमुने चैव गोदावरि सरस्वति। नर्मदे सिन्धु कावेरि जलेऽस्मिन् संनिधिं कुरु॥",
    },
    {
      id: "mousara-event",
      title: "मौसारा (मातृपक्ष स्वागत)",
      hindiTithi: "मिती अगहन सुदी 03, शुक्रवार",
      date: "27 नवंबर 2026",
      time: "दोपहर 01:00 बजे",
      category: "manglik",
      iconType: "mousara",
      description: "॥ मातृपक्षस्य संमानं स्नेहेन परिपूरितम्। आशीर्वादेन संयुक्तं सौहार्दं वर्धते सदा॥",
    },
    {
      id: "pritibhoj-event",
      title: "प्रीतिभोज (स्नेह सहभोज)",
      hindiTithi: "मिती अगहन सुदी 03, शुक्रवार",
      date: "27 नवंबर 2026",
      time: "सायं 05:00 बजे से आपके आगमन तक....",
      category: "main",
      iconType: "pritibhoj",
      description: "॥ ॐ अन्नपतेऽन्नस्य नो देह्यनमीवस्य शुष्मिणः। प्र प्र दातारं तारिष ऊर्जं नो धेहि द्विपदे चतुष्पदे॥",
    },
    {
      id: "barat-prasthan",
      title: "बारात प्रस्थान",
      hindiTithi: "मिती अगहन सुदी 04, शनिवार",
      date: "28 नवंबर 2026",
      time: "प्रातः 07:00 बजे",
      category: "main",
      iconType: "barat",
      description: "॥ ॐ स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः। स्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः स्वस्ति नो बृहस्पतिर्दधातु॥",
    },
    {
      id: "shubh-lagna",
      title: "शुभ लग्न एवं पाणिग्रहण संस्कार",
      hindiTithi: "मिती अगहन सुदी 04, शनिवार",
      date: "28 नवंबर 2026",
      time: "दिन में",
      category: "main",
      iconType: "lagna",
      description: "॥ गृभ्णामि ते सौभगत्वाय हस्तं मया पत्या जरदष्टिर्यथासः। भगो अर्यमा सविता पुरन्धिर्मह्यं त्वादुर्गार्हपत्याय देवाः॥",
    },
  ],
  mousara: {
    title: "मौसारा",
    date: "27.11.2026, शुक्रवार",
    time: "दोपहर 01:00 बजे",
    hosts: "श्रीमान् ब्याईजी सा. कन्हैयालाल जी, समरथ जी सेन (राठौर)",
    residence: "निवासी-सालमगढ़ (राज.)",
    note: "श्रीमान् ब्याईजी सा. कन्हैयालाल जी, समरथ जी सेन (राठौर), निवासी-सालमगढ़ (राज.) वालों के यहाँ से दिनांक-27.11.2026, शुक्रवार को दोप. 01 बजे आवेगा।",
  },
  barat: {
    title: "बारात प्रस्थान",
    date: "28.11.2026",
    day: "शनिवार, 28 नवंबर 2026",
    departureTime: "प्रातः 07:00 बजे",
    destination: "श्रीमान् ब्याईजी कारूलाल जी, बद्रीलाल जी सेन, निवासी-अर्निया गुर्जर वालों के यहाँ",
    fullNote: "श्रीमान् ब्याईजी कारूलाल जी, बद्रीलाल जी सेन, निवासी-अर्निया गुर्जर वालों के यहाँ दिनांक-28.11.2026, शनिवार को प्रातः 07 बजे जावेगी।",
  },
  mainEvent: {
    title: "प्रीतिभोज",
    subTitle: "मंगल परिणयोत्सव पर आयोजित स्नेह सहभोज",
    date: "27 नवंबर 2026",
    day: "शुक्रवार",
    time: "सायं -05 बजे से आपके आगमन तक....",
    year: "2026",
    venue: "पाटीदार धर्मशाला",
    addressLine1: "ग्राम-कलालिया, तह.-जावरा",
    addressLine2: "जिला-रतलाम (म.प्र.)",
    mapsQuery: "Patidar Dharamshala Kalaliya Jaora Ratlam",
    mapsUrl: "https://maps.app.goo.gl/tWg9o1ExbAxuv9iu5",
  },
  familySectionTitle: "स्नेहिल आमंत्रण एवं परिवार",
  familySectionSubtitle: "विनीत, शुभेच्छु, ननिहाल पक्ष, दर्शनाभिलाषी, विशेष आग्रह, स्वागतातुर एवं बालमनुहार",
  vineet: {
    title: "विनीत",
    members: [
      "बालाराम - सौ. सोहन बाई",
      "चि. ईश्वरलाल - सौ. चन्द्रप्रभा",
      "चि. विकास चौहान (सेन)",
    ],
    phone: "9179491212",
    firm: "साजन श्री हेयर आर्ट, कलालिया",
  },
  shubhechhu: {
    title: "शुभेच्छु",
    head: "ईश्वरलाल S/o बालाराम जी चौहान (सेन)",
    members: [
      "चि. दिपराज",
      "विकास सेन (पटलावद वाले)",
    ],
    address: "ग्राम-कलालिया, तह.-जावरा, जिला-रतलाम (म.प्र.)",
    phone: "9179491212",
  },
  nanihalPaksh: {
    title: "ननिहाल पक्ष",
    residence: "निवासी-सालमगढ़ (राज.)",
    members: [
      "रामचन्द्र जी - सौ. शांतिबाई",
      "कन्हैयालाल जी - सौ. टमा बाई",
      "कैलाश जी - सौ. कान्ता बाई",
      "बाबूलाल जी - सौ. धापू बाई",
      "कु. मांगी जीजी",
      "भूपेश जी - सौ. मधुबाला",
      "समरथ जी - सौ. राजु (राजेश्वरी)",
      "हेमंत जी - सौ. अनिता",
      "शुभम जी - सौ. ममता",
      "भावेश जी - पूजा",
    ],
    children: "चि. दिया, रोहन, जिज्ञासा, आराध्या, सिद्धिका राठौर (सेन)",
  },
  darshanabhilashi: {
    title: "दर्शनाभिलाषी",
    groups: [
      {
        location: "सकरावदा",
        names: "चिमनलाल, भेरूलाल, पप्पूलाल, नारूलाल, शांतिलाल",
      },
      {
        location: "नन्दावता",
        names: "मोहन, लक्ष्मीनारायण",
      },
      {
        location: "रतलाम",
        names: "कैलाश, सुरेश, नागेश्वर, मुकेश",
      },
      {
        location: "निम्बोद",
        names: "प्रकाश, जितेन्द्र, सत्यनारायण",
      },
      {
        location: "पटलावद",
        names: "नागेश्वर, शुभम (भोला) एवं समस्त चौहान (सेन) परिवार",
      },
    ],
  },
  visheshAagrah: {
    title: "विशेष आग्रह",
    residence: "निवासी-राकोदा",
    members: [
      "नन्दकिशोर - सौ. सावित्री बाई",
      "अशोक - सौ. गुड्डी बाई",
      "गोपाल - सौ. पार्वती बाई",
      "प्रकाश - सौ. माया",
      "विनोद - सौ. सविता",
      "सुभाष - सौ. पूजा",
      "नागेश्वर परमार",
    ],
  },
  swagatakshuk: {
    title: "स्वागतातुर / स्वागतोत्सुक",
    residence: "नि.-पटलावद",
    members: [
      "बाबूलाल - सौ. मंजू बाई",
      "सुनिल - सौ. पूजा",
      "पंकज, जियांशी",
    ],
  },
  bhanej: {
    title: "भाणेज",
    residence: "रियावन",
    members: [
      "प्रभुलाल जी - सौ. गुड्डी बाई",
      "कैलाश जी - सौ. अयोध्या बाई",
      "सौ. रेखा बाई - बाबूलाल जी (अमलेटा)",
      "सौ. पार्वती - शांतिलाल जी (कलालिया)",
    ],
  },
  balManuhar: {
    title: "बालमनुहार",
    poem: "खुशियों का दिन होगा, जश्न जरा हट के होगा।\nमेरे भैया/अंकल की शादी में अंदाज जरा हट के होगा॥",
    children: [
      "जिज्ञासा",
      "सिद्धी",
      "छोटी",
      "जियांशी",
      "हेमंत",
      "हर्ष",
      "जयदेव",
      "हर्षिता",
    ],
  },
  commercialFirms: [
    "साजन श्री हेयर आर्ट (अम्बे माता मंदिर के पास, कलालिया)",
    "चौहान कृषि फार्म (पटलावद)",
  ],
  closingMessage: "आप सपरिवार पधारकर हमें अनुग्रहित करें।",
  closingSalutation: "सादर आमंत्रण",
  audioPath: "/audio/wedding-music.mp3",
  weddingDateISO: "2026-11-27T17:00:00+05:30", // Pritibhoj 27 Nov 2026, 5:00 PM
};
