const cymbals = [
    {id:'1',
    name: 'Crash 16 1104g',
    price: 'U$ 160',
    category: 'crash',
    img: 'https://lh3.googleusercontent.com/dBom-tJ5Gt5awmMCAefRmvER9wBqRhpLnt2cjqWlYvk-2NaJ0zmrCUtuPpKUOO7abNaKKd8ZbTOStLQXFTLILjokn27PmSylHwWaU6VVxzGPV9Kooo87GHmXc2PNOWI-rc0mUR-9Sg',
    stock: 5,
    description: 'Platillo conformado a mano y torneado artesanalmente en aleación de Bronce B20 (20% Estaño - 80% Cobre). - crash'},
    {id:'2',
    name: 'CRASH 17 1312G',
    price: 'U$ 170',
    category: 'crash',
    img: 'https://lh3.googleusercontent.com/dBom-tJ5Gt5awmMCAefRmvER9wBqRhpLnt2cjqWlYvk-2NaJ0zmrCUtuPpKUOO7abNaKKd8ZbTOStLQXFTLILjokn27PmSylHwWaU6VVxzGPV9Kooo87GHmXc2PNOWI-rc0mUR-9Sg',
    stock: 1,
    description: 'Platillo conformado a mano y torneado artesanalmente en aleación de Bronce B20 (20% Estaño - 80% Cobre). - crash'},
    {id:'3',
    name: 'JAZZ RIDE 22 2740G + 2 TACHAS',
    price: 'U$ 270',
    category: 'ride',
    img: 'https://lh3.googleusercontent.com/hzkdHE3TZvHxIPFqpiRam5iqXbkP92aEVNFOS1etWCILUbuBGx1xmfa4M7xsddRfF2u5FS1fFrcdG2MQopRF2GMQJ9OL8dxX6Pa_cMlMtHsl-3JmVKOaCKSKSR3v7UPYDWmABPxJYg',
    stock: 1,
    description: 'Platillo conformado a mano y torneado artesanalmente en aleación de Bronce B20 (20% Estaño - 80% Cobre). - ride'},
    {id:'4',
    name: 'Ride 20 2258g',
    price: 'U$ 160',
    category: 'ride',
    img: 'https://lh3.googleusercontent.com/hzkdHE3TZvHxIPFqpiRam5iqXbkP92aEVNFOS1etWCILUbuBGx1xmfa4M7xsddRfF2u5FS1fFrcdG2MQopRF2GMQJ9OL8dxX6Pa_cMlMtHsl-3JmVKOaCKSKSR3v7UPYDWmABPxJYg',
    stock: 1,
    description: 'Platillo conformado a mano y torneado artesanalmente en aleación de Bronce B20 (20% Estaño - 80% Cobre). - ride'},
    {id:'5',
    name: 'Hi Hat 14 Top 1102g Bottom 1158g',
    price: 'U$ 250',
    category: 'hihat',
    img: 'https://lh3.googleusercontent.com/-D2wvVYWL4ITW8coQLtMn1XyNcWgBsQRdFNvh1RA-1CRniTBFt4GdFEC72HvnzLUPpAc-tcwKVg7Kop4v4OZWrQzCLoL-IbJP7LUP5WnWLfpFCn6PVqpFx_mW4gCfat5jy4pT8xfRA',
    stock: 2,
    description: 'Platillos conformados a mano y torneados artesanalmente en aleación de Bronce B20 (20% Estaño - 80% Cobre). - hi hat'},
    {id:'6',
    name: 'Hi Hat 11 Top 586g Bottom 650g',
    price: 'U$ 140',
    category: 'hihat',
    img: 'https://image.made-in-china.com/43f34j00zmYQItkgJNpj/Thin-Crash-Cymbal-with-Bright-Sound.jpg',
    stock: 1,
    description: 'Platillos conformados a mano y torneados artesanalmente en aleación de Bronce B20 (20% Estaño - 80% Cobre). - hi hat'},
    {id:'7',
    name: 'Splash 10 279g',
    price: 'U$ 50',
    category: 'splash',
    img: 'https://lh3.googleusercontent.com/SZARAdH9ztL8Z7a19aQsH3hYaypsjd0I4Bj5YqHwp5Sw7VN0yidfp5XgzS4knehRSfnTRCKfl-M4Ko--ydq-Odve7epC_F3R62xRLiDNKDMT-dacaktsB71WJvgY6Sa61XphDD2P4Q',
    stock: 2,
    description: 'Platillo conformado a mano y torneado artesanalmente en aleación de Bronce B20 (20% Estaño - 80% Cobre). - splash'},
    {id:'8',
    name: 'Snare Cymbal 11 404g',
    price: 'U$ 50',
    category: 'fx',
    img: 'https://m.media-amazon.com/images/I/61PsUR9YYhL._AC_SS450_.jpg',
    stock: 2,
    description: 'Platillo conformado a mano y torneado artesanalmente en aleación de Bronce B20 (20% Estaño - 80% Cobre). - splash'}
]

export const getCymbals = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cymbals)
        }, 200)
    })
}

export const getCymbalsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cymbals.filter(c => c.category === categoryId))
        }, 200)
    })
}

export const getCymbalsById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cymbals.find(cym => cym.id === id))
        }, 200)
    })
}