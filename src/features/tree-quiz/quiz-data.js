export const gundamTimeline = [
    {
        id: 'uc-era',
        name: 'UC纪元 (Universal Century)',
        year: 1979,
        children: [
            {
                id: 'mobile-suit-gundam',
                name: '机动战士高达 (Mobile Suit Gundam)',
                year: 1979,
                children: [
                    { name: 'RX-78-2 高达 (Gundam)', id: 'rx-78-2-gundam' },
                    { name: 'MS-06 扎古II (Zaku II)', id: 'ms-06-zaku-ii' },
                    { name: 'MS-07B 老虎 (Gouf)', id: 'ms-07b-gouf' },
                ],
            },
            {
                id: 'zeta-gundam',
                name: '机动战士Z高达 (Zeta Gundam)',
                year: 1985,
                children: [
                    {
                        name: 'MSZ-006 Ζ高达 (Zeta Gundam)',
                        id: 'msz-006-zeta-gundam',
                    },
                    {
                        name: 'MS-100 百式 (Hyaku Shiki)',
                        id: 'ms-100-hyaku-shiki',
                    },
                    {
                        name: 'MSN-00100 百万式 (Hyaku Shiki Kai)',
                        id: 'msn-00100-hyaku-shiki-kai',
                    },
                ],
            },
            {
                id: 'chars-counterattack',
                name: "逆袭的夏亚 (Char's Counterattack)",
                year: 1988,
                children: [
                    { name: 'RX-93 ν高达 (ν Gundam)', id: 'rx-93-nu-gundam' },
                    { name: 'MSN-04 沙扎比 (Sazabi)', id: 'msn-04-sazabi' },
                    { name: 'RGM-89 杰刚 (Jegan)', id: 'rgm-89-jegan' },
                ],
            },
        ],
    },
    {
        id: 'ce-era',
        name: 'CE纪元 (Cosmic Era)',
        year: 2002,
        children: [
            {
                id: 'gundam-seed',
                name: '机动战士高达SEED (SEED)',
                year: 2002,
                children: [
                    {
                        name: 'GAT-X105 突击高达 (Strike Gundam)',
                        id: 'gat-x105-strike',
                    },
                    {
                        name: 'TS-01Z 自由高达 (Freedom Gundam)',
                        id: 'ts-01z-freedom',
                    },
                    {
                        name: 'ZGMF-X09A 正义高达 (Justice Gundam)',
                        id: 'zgmf-x09a-justice',
                    },
                ],
            },
            {
                id: 'gundam-seed-destiny',
                name: '机动战士高达SEED DESTINY (SEED DESTINY)',
                year: 2004,
                children: [
                    {
                        name: 'ZGMF-X56S 脉冲高达 (Impulse Gundam)',
                        id: 'zgmf-x56s-impulse',
                    },
                    {
                        name: 'ZGMF-X42S 命运高达 (Destiny Gundam)',
                        id: 'zgmf-x42s-destiny',
                    },
                    {
                        name: 'ZGMF-X666S 传说高达 (Legend Gundam)',
                        id: 'zgmf-x666s-legend',
                    },
                ],
            },
        ],
    },
    {
        id: '00-era',
        name: '00纪元 (AD 2307)',
        year: 2007,
        children: [
            {
                id: 'gundam-00',
                name: '机动战士高达00 (Gundam 00)',
                year: 2007,
                gundams: [
                    { name: 'GN-001 能天使高达 (Exia)', id: 'gn-001-exia' },
                    {
                        name: 'GN-002 力天使高达 (Dynames)',
                        id: 'gn-002-dynames',
                    },
                    {
                        name: 'CB-0000G/C 再生高达 (Reborns Gundam)',
                        id: 'cb-0000g-reborns',
                    },
                ],
            },
            {
                id: 'gundam-00-movie',
                name: '机动战士高达00剧场版 (Gundam 00 The Movie)',
                year: 2010,
                gundams: [
                    { name: 'CB-001 1高达 (1 Gundam)', id: 'cb-001-1-gundam' },
                    {
                        name: 'CB-002 疗天使高达 (Raphael Gundam)',
                        id: 'cb-002-raphael',
                    },
                ],
            },
        ],
    },
    {
        id: 'iron-blooded-era',
        name: '铁血的奥尔芬斯 (Iron-Blooded Orphans)',
        year: 2015,
        children: [
            {
                id: 'iron-blooded-orphans-season-1',
                name: '铁血的奥尔芬斯 (第一季)',
                year: 2015,
                gundams: [
                    {
                        name: 'ASW-G-08 巴耶力高达 (Gundam Barbatos)',
                        id: 'asw-g-08-barbatos',
                    },
                    {
                        name: 'ASW-G-11 喀尔巴阡高达 (Gundam Calamity)',
                        id: 'asw-g-11-calamity',
                    },
                ],
            },
            {
                id: 'iron-blooded-orphans-season-2',
                name: '铁血的奥尔芬斯 (第二季)',
                year: 2017,
                gundams: [
                    {
                        name: 'ASW-G-66 锡蒙力高达 (Gundam Sion)',
                        id: 'asw-g-66-sion',
                    },
                    {
                        name: 'ASW-G-73 奥尔芬斯高达 (Gundam Orpheus)',
                        id: 'asw-g-73-orpheus',
                    },
                ],
            },
        ],
    },
    {
        id: 'other-worlds',
        name: '其他独立世界观',
        year: 1983,
        children: [
            {
                id: 'gundam-v',
                name: '机动战士V高达 (V Gundam)',
                year: 1993,
                gundams: [
                    {
                        name: 'LM314V23 V2高达 (V2 Gundam)',
                        id: 'lm314v23-v2-gundam',
                    },
                    { name: 'ZM-S24G 盖德高达 (Godwin)', id: 'zm-s24g-godwin' },
                ],
            },
            {
                id: 'gundam-g-fighter',
                name: '机动武斗传G高达 (Gundam Fighter)',
                year: 1994,
                gundams: [
                    {
                        name: 'GF13-017NJ 闪光高达 (Shining Gundam)',
                        id: 'gf13-017nj-shining',
                    },
                    {
                        name: 'GF13-050NSW 诺贝尔高达 (Noble Gundam)',
                        id: 'gf13-050nsw-noble',
                    },
                ],
            },
        ],
    },
];
