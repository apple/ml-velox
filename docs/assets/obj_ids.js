//
// For licensing see accompanying LICENSE file.
// Copyright (C) 2026 Apple Inc. All Rights Reserved.
//


obj_data = {
    "reconstruction": [
        // "31877c54-cdad-5612-b079-e7170ae067e8_a000_s0000_fskip1",
        // "0ebbfc65a98c4d51b53f75cfc0effed3_a000_s0000_fskip1", 
        "21b0649aba644fa8ba5b637f0c6731fd_a002_s0000_fskip1", 
        "65cd988be2fa4fb189dfef7e9315265f_a000_s0000_fskip1", 
        // "49058315-061b-5d05-8dea-2a76b2336d1e_a000_s0000_fskip1",
        "14454cd1-5506-52a2-8a56-884c76047939_a000_s0000_fskip1",
        "2b900b9f10224c4cb9f8504e39afe801_a000_s0000_fskip1",
        "47db1f8eb38b4813b29826a09bd89064_a000_s0000_fskip1"],
    
    "limitation": [
        {
            "obj_ids": [{"id": '17d649921e5f49a094113bc696a6089f_a000_s0000_fskip1', "type":"reconstruction"}],
            "title": "Rotation",
            "description": "Our encoder can struggle with rotating object parts, as it relies on only RGB point cloud input. This is because there can be ambiguity whether a location is moving or stationary with only sparse RGB measurements provided by a point cloud without correspondences.",
        },
        {
            "obj_ids": [{"id":'1f96c21dcf2e4a9cae2f2e10e60615ed_a000_s0000_fskip1', "type":"reconstruction"}, {"id":'99745a313c3f49989d9d357e425dd63c_a000_s0000_fskip1', "type":"video4d"}],
            "title": "High frequency texture and text",
            "description": "Both our representation and generative model can also struggle with high frequency texture and text thanks to limited capacity. This results in visual artifacts, as illustrated below."
        },
        {
            "obj_ids": [{"id":'21b0649aba644fa8ba5b637f0c6731fd_a002_s0000_fskip1', "type":"video4d"}, {"id":'56c75ce036b2418e9469995f0e87a8c8_a000_s0000_fskip1', "type":"reconstruction"}],
            "title": "Texture flicker",
            "description": "Our representation can struggle with flicker, as it does not jointly produce Gaussians over all frames due to limits on GPU memory."
        }
        
    ],
    "video4d": [
        "da8bbcb226fc4b2a862e94a4c5ce1930_a000_s0000_fskip1",
        '1465385cb2ec498a9b9e289e98cdf2c7_a000_s0000_fskip1',
        // '241efdcc-e59b-55a1-9322-1380b5e5734c_a000_s0000_fskip1',
        '5cd6145d750a43e7b4b475144aea8c2a_a000_s0000_fskip1',
        // '0ebbfc65a98c4d51b53f75cfc0effed3_a000_s0000_fskip1',
        'd6dc9b6184984734a613fcee6baa609a_a000_s0000_fskip1',
        '2b900b9f10224c4cb9f8504e39afe801_a000_s0000_fskip1',
        // '17e22aa3-e9f1-5179-81d3-1185bbd349d0_a000_s0000_fskip1',
        // '24a5b2cdf7464673a7238f5376131f32_a007_s0000_fskip1',
        '7302dff50ec440b2b97cc4b332d5835f_a000_s0000_fskip1',
        '77730298c9c8481e9b54d98430e9723f_a000_s0000_fskip1',
        '6d3307559b044e14a7e59816e69fcf22_a000_s0000_fskip1',
        // '75d34af973bb4b388059f6749475cf16_a001_s0000_fskip1',
        '85e069ec8abf43af822bccc7ff724cf8_a000_s0000_fskip1',
        'd5658e6fe77d40bda00d59bb840cd856_a012_s0000_fskip1',
        'c5cd6c62599943fdb0851db41f92000f_a000_s0000_fskip1',
        // 'bdb554e6ae0b4a7d925a91222ec3fed8_a000_s0000_fskip1',
        // 'e4b3f284-fe79-5ca2-8ed5-4341c022d196_a000_s0000_fskip1',
        // 'e3fd926b-f12e-566c-9804-45ed5c8a2e7c_a000_s0000_fskip1',
        // 'fc25c4dc-41e2-5226-99c0-b261a8f7f6d2_a000_s0000_fskip1',
        '01782ab4a2994d0a89e58ef96e951958_a000_s0000_fskip1',

        "01bc463ae3be41da9ac26dcac6033592_a000_s0000_fskip1", 
        // "0b5293a5-5f02-5938-b7a4-9443879d3bd2_a000_s0000_fskip1", 
        // "0ca19efb8c6741bda5a634cad8ef1b7b_a000_s0000_fskip1",
        // "31877c54-cdad-5612-b079-e7170ae067e8_a000_s0000_fskip1",
        // "8134798626c94063beebc90cfecb9599_a000_s0000_fskip1", 
        // "3e0999d5-2ecf-5be5-87fb-83225bd373b3_a000_s0000_fskip1", 
        "6b3cb0f76a7540f7968e785c68058883_a005_s0000_fskip1", 
        "69bcbab9d3f04424abb4172128a693f2_a000_s0000_fskip1", 
        "a1df79d6bf8b427b97fe43cfe31b99dd_a001_s0000_fskip1", 
        // "b1565602acf2441db8c60b4ee3535aa7_a000_s0000_fskip1",
        // "bd0f6d26-dac4-5501-8519-91a0789c275f_a000_s0000_fskip1", 
        // "dbff607787fd439a886ade38e0797dbb_a012_s0000_fskip1",
        // "f8e8ff39-94b7-5531-bc85-67660c3d20bc_a000_s0000_fskip1"
    ],
    "cloth": ["drop_test_000071_000017",
        "drop_test_000079_000019",
        "drop_test_000003_000001",
        "drop_test_000302_000079",
        "drop_test_000308_000081",
        "drop_test_000342_000092",
        "drop_test_000436_000124"],
    "tracking": [
        // "ceb9044b-5a33-5ee6-9b2e-6d54cbc525aa_a000_s0000_fskip1",
        // "1959a6bd-6e32-5881-80e5-5c8b8b40c9a0_a000_s0000_fskip1",
        // "fdd3864ac61a4f17aa7331462eac2722_a000_s0000_fskip1",
        "9c918560ee0944ec8337c6516263eed1_a000_s0000_fskip1",
        "a950d1e0b2574fbd9ced0c6d6e0bb9b3_a000_s0000_fskip1",
        // "ca1fad9e-82f4-52c9-83ed-93d761b5065c_a000_s0000_fskip1",
        "da4105b90c8b4db29739b1f7d49bbaac_a000_s0000_fskip1",
        // "75d34af973bb4b388059f6749475cf16_a000_s0000_fskip1",
        // "6b3cb0f76a7540f7968e785c68058883_a000_s0000_fskip1",
        "c7d53896fa244af797ee793ad68abfa6_a000_s0000_fskip1"],
}

// Attribution for gallery panels (reconstruction + video4d).
// Fill in { handle, url, license } for each ID; null = no attribution shown.
// license defaults to "CC Attribution" if omitted.
// Example: "some_id": { handle: "sanyabeast", url: "https://sketchfab.com/...", license: "CC Attribution" }
const gallery_creators = {
    // --- tracking ---
    "6b3cb0f76a7540f7968e785c68058883_a000_s0000_fskip1":      { handle: "thmsgntz", url: "https://github.com/thmsgntz/bone-collector", license: "Apache License 2.0" },    "9c918560ee0944ec8337c6516263eed1_a000_s0000_fskip1":      { handle: "Aysenazkara", url: "https://sketchfab.com/3d-models/cylinder-obstacle-9c918560ee0944ec8337c6516263eed1", license: "CC Attribution" },
    "a950d1e0b2574fbd9ced0c6d6e0bb9b3_a000_s0000_fskip1":      { handle: "cristopher.faundez", url: "https://sketchfab.com/3d-models/rigged-animated-character-free-a950d1e0b2574fbd9ced0c6d6e0bb9b3", license: "CC Attribution" },
    "da4105b90c8b4db29739b1f7d49bbaac_a000_s0000_fskip1":      { handle: "pikabobalex", url: "https://sketchfab.com/3d-models/suchominus-lowpoly-da4105b90c8b4db29739b1f7d49bbaac", license: "CC Attribution" },
    "c7d53896fa244af797ee793ad68abfa6_a000_s0000_fskip1":      { handle: "jimmygunawan", url: "https://sketchfab.com/3d-models/dancing-tree-creature-c7d53896fa244af797ee793ad68abfa6", license: "CC Attribution" },
    // --- limitation ---
    "17d649921e5f49a094113bc696a6089f_a000_s0000_fskip1":      { handle: "Natalia.Saprykina", url: "https://sketchfab.com/3d-models/pizzaman-17d649921e5f49a094113bc696a6089f", license: "CC Attribution" },
    "1f96c21dcf2e4a9cae2f2e10e60615ed_a000_s0000_fskip1":      { handle: "Akabuki", url: "https://sketchfab.com/3d-models/green-shake-hip-hop-dancing-1f96c21dcf2e4a9cae2f2e10e60615ed", license: "CC Attribution" },
    "99745a313c3f49989d9d357e425dd63c_a000_s0000_fskip1":      { handle: "Martijn-A-Wijnhoven", url: "https://sketchfab.com/3d-models/armour-from-fluitenberg-a-3d-reconstruction-99745a313c3f49989d9d357e425dd63c", license: "CC Attribution" },
    "56c75ce036b2418e9469995f0e87a8c8_a000_s0000_fskip1":      { handle: "Njan", url: "https://sketchfab.com/3d-models/twinleaf-town-56c75ce036b2418e9469995f0e87a8c8", license: "CC Attribution" },
    // --- reconstruction ---
    // "31877c54-cdad-5612-b079-e7170ae067e8_a000_s0000_fskip1":  { handle: "ggadwa", url: "https://github.com/ggadwa/WSJS_Demo_Kart/blob/f3efc7870822ce42b033091c907ccaac8b39d6c9/models/retro_car_red/retro_car_red.gltf", license: "MIT License" },
    "21b0649aba644fa8ba5b637f0c6731fd_a002_s0000_fskip1":      { handle: "dylee063", url: "https://sketchfab.com/3d-models/mae-borowski-rigged-21b0649aba644fa8ba5b637f0c6731fd", license: "CC Attribution-NonCommercial-ShareAlike" },
    "65cd988be2fa4fb189dfef7e9315265f_a000_s0000_fskip1":      { handle: "hzsuywvbjndfrv", url: "https://sketchfab.com/3d-models/rusty-toolbox-65cd988be2fa4fb189dfef7e9315265f", license: "CC Attribution" },
    "14454cd1-5506-52a2-8a56-884c76047939_a000_s0000_fskip1":  { handle: "kazunetakeda25", url: "https://github.com/kazunetakeda25/envirosolar-ar/blob/404303c2646699a6802206215e83aaa524fc6ba0/Assets/Imported/cats/ES_Cat/ES_Cat_WAG_01.FBX", license: "Apache License 2.0" },
    "2b900b9f10224c4cb9f8504e39afe801_a000_s0000_fskip1":      { handle: "lawrencetrigg1989", url: "https://sketchfab.com/3d-models/grevillea-animation-2b900b9f10224c4cb9f8504e39afe801", license: "CC Attribution" },
    "47db1f8eb38b4813b29826a09bd89064_a000_s0000_fskip1":      { handle: "miyake", url: "https://sketchfab.com/3d-models/salsa-47db1f8eb38b4813b29826a09bd89064", license: "CC Attribution" },
    // --- video4d ---
    "1465385cb2ec498a9b9e289e98cdf2c7_a000_s0000_fskip1":      { handle: "paula1221965", url: "https://sketchfab.com/3d-models/swimming-fish-1465385cb2ec498a9b9e289e98cdf2c7", license: "CC Attribution" },
    "5cd6145d750a43e7b4b475144aea8c2a_a000_s0000_fskip1":      { handle: "acharlie2019", url: "https://sketchfab.com/3d-models/lana-loud-capoeira-moves-5cd6145d750a43e7b4b475144aea8c2a", license: "CC Attribution" },
    "d6dc9b6184984734a613fcee6baa609a_a000_s0000_fskip1":      { handle: "gareths11", url: "https://sketchfab.com/3d-models/samba-dancing-d6dc9b6184984734a613fcee6baa609a", license: "CC Attribution" },
    "7302dff50ec440b2b97cc4b332d5835f_a000_s0000_fskip1":      { handle: "SpencerThomas2", url: "https://sketchfab.com/3d-models/thomas-spencer-wk4-5-marble-madness-7302dff50ec440b2b97cc4b332d5835f", license: "CC Attribution" },
    "77730298c9c8481e9b54d98430e9723f_a000_s0000_fskip1":      { handle: "shinanaa", url: "https://sketchfab.com/3d-models/fish-77730298c9c8481e9b54d98430e9723f", license: "CC Attribution" },
    "6d3307559b044e14a7e59816e69fcf22_a000_s0000_fskip1":      { handle: "MakutaMiserix", url: "https://sketchfab.com/3d-models/beckys-samba-dance-6d3307559b044e14a7e59816e69fcf22", license: "CC Attribution" },
    "85e069ec8abf43af822bccc7ff724cf8_a000_s0000_fskip1":      { handle: "efrenr", url: "https://sketchfab.com/3d-models/eclipse2-85e069ec8abf43af822bccc7ff724cf8", license: "CC Attribution" },
    "d5658e6fe77d40bda00d59bb840cd856_a012_s0000_fskip1":      { handle: "Weverton.Oliveira", url: "https://sketchfab.com/3d-models/triceratops-dinosaur-low-poly-d5658e6fe77d40bda00d59bb840cd856", license: "CC Attribution" },
    "c5cd6c62599943fdb0851db41f92000f_a000_s0000_fskip1":      { handle: "ginapalumbo", url: "https://sketchfab.com/3d-models/pesce-combattente-c5cd6c62599943fdb0851db41f92000f", license: "CC Attribution" },
    // "bdb554e6ae0b4a7d925a91222ec3fed8_a000_s0000_fskip1":      { handle: "marianova", url: "https://sketchfab.com/3d-models/mikeflies-bdb554e6ae0b4a7d925a91222ec3fed8", license: "CC Attribution" },
    "01782ab4a2994d0a89e58ef96e951958_a000_s0000_fskip1":      { handle: "624230037", url: "https://sketchfab.com/3d-models/624230037-peasant-girl-breakdance-1990-fbx-01782ab4a2994d0a89e58ef96e951958", license: "CC Attribution" },
    "01bc463ae3be41da9ac26dcac6033592_a000_s0000_fskip1":      { handle: "acharlie2019", url: "https://sketchfab.com/3d-models/sora-invisible-key-slash-combo-01bc463ae3be41da9ac26dcac6033592", license: "CC Attribution" },
    "0ca19efb8c6741bda5a634cad8ef1b7b_a000_s0000_fskip1":      { handle: "zaykora the clown", url: "https://sketchfab.com/3d-models/0ca19efb8c6741bda5a634cad8ef1b7b", license: "CC Attribution" },
    // "fire_bird":      { handle: "zaykora the clown", url: "https://sketchfab.com/3d-models/0ca19efb8c6741bda5a634cad8ef1b7b", license: "CC Attribution" },
    "6b3cb0f76a7540f7968e785c68058883_a005_s0000_fskip1":      { handle: "thmsgntz", url: "https://github.com/thmsgntz/bone-collector", license: "Apache License 2.0" },    "69bcbab9d3f04424abb4172128a693f2_a000_s0000_fskip1":      { handle: "gsmrf", url: "https://sketchfab.com/3d-models/fist-fight-b-huggy-wuggy-69bcbab9d3f04424abb4172128a693f2", license: "CC Attribution" },
    "a1df79d6bf8b427b97fe43cfe31b99dd_a001_s0000_fskip1":      { handle: "dieterreinert", url: "https://sketchfab.com/3d-models/a-bob-model-a1df79d6bf8b427b97fe43cfe31b99dd", license: "CC Attribution" },
    // "b1565602acf2441db8c60b4ee3535aa7_a000_s0000_fskip1":      { handle: "raynart7", url: "https://sketchfab.com/3d-models/pip-victory-final-b1565602acf2441db8c60b4ee3535aa7", license: "CC Attribution" },
    "da8bbcb226fc4b2a862e94a4c5ce1930_a000_s0000_fskip1":      { handle: "dylansburner", url: "https://sketchfab.com/3d-models/yellow-joy-butterfly-da8bbcb226fc4b2a862e94a4c5ce1930", license: "CC Attribution" },
}