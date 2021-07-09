const Job = require('../model/Job')
const Profile = require('../model/Profile')
const JobUtils = require('../utils/JobUtils')

module.exports = {
    index(req, res) {
        const jobs = Job.get()
        const profile = Profile.get()

        let statusCount = {
            progress: 0,
            done: 0,
            total: jobs.length
        }

        const updatedJobs = jobs.map(job => {
            // Ajustes  no job
            const remaining = JobUtils.remainingDays(job)
            const status = remaining <= 0 ? 'done' : 'progress'

            // Somando a quantidade de status
            statusCount[status] += 1

            return {
                ...job,
                remaining,
                status,
                budget: JobUtils.calculateBudget(job, profile['value-hour'])
            }
        })
    
        res.render('index', { jobs: updatedJobs, profile, statusCount })
    }
}
