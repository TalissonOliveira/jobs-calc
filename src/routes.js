const express = require('express')
const routes = express.Router()

//__dirname = pegar caminho absoluto(diretório)
const views = __dirname + '/views/'

const profile = {
    name: 'Jakeliny',
    avatar: 'https://avatars.githubusercontent.com/u/17316392?s=460&u=6912a91a70bc89745a2079fdcdad3bc3ce370f13&v=4',
    'monthly-budget': 3000,
    'days-per-week': 5,
    'hours-per-day': 5,
    'vacation-per-year': 4
}

const jobs = [
    {
        id: 1,
        name: 'Pizzaria Guloso',
        'daily-hours': 2,
        'total-hours': 60,
        created_at: Date.now()
    },
    {
        id: 2,
        name: 'OneTwo Project',
        'daily-hours': 3,
        'total-hours': 47,
        created_at: Date.now()
    }
]

routes.get('/', (req, res) => {

    const updatedJobs = jobs.map(job => {
        // Ajustes no job, Cáculo de tempo restante
        const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed() // toFixed - arredondar número

        const createdDate = new Date(job.created_at)
        const dueDay = createdDate.getDate() + Number(remainingDays)
        const dueDateInMs = createdDate.setDate(dueDay)

        const timeDiffInMs = dueDateInMs - Date.now()

        // Transformar milisegundos em dias
        const dayInMs = 1000 * 60 * 60 * 24
        const dayDiff = Math.floor(timeDiffInMs / dayInMs)

        return job
    })


    res.render(views + 'index', { jobs })
})
routes.get('/job', (req, res) => res.render(views + 'job'))
routes.post('/job', (req, res) => {
    const lastId = jobs[jobs.length - 1]?.id || 1 // ? = se tiver id, pegue ele, se não tiver entre no OU

    jobs.push({
        id: lastId + 1,
        name: req.body.name,
        'daily-hours': req.body['daily-hours'],
        'total-hours': req.body['total-hours'],
        created_at: Date.now() // atribuindo a data de hoje
    })

    return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render(views + 'job-edit'))
routes.get('/profile', (req, res) => res.render(views + 'profile', { profile }))


module.exports = routes