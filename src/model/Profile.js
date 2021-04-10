let data = {
    name: 'Jakeliny',
    avatar: 'https://avatars.githubusercontent.com/u/17316392?s=460&u=6912a91a70bc89745a2079fdcdad3bc3ce370f13&v=4',
    'monthly-budget': 3000,
    'days-per-week': 5,
    'hours-per-day': 5,
    'vacation-per-year': 4,
    'value-hour': 75
}

module.exports = {
    get() {
        return data
    },
    update(newData) {
        data = newData
    }
}