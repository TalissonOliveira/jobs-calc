module.exports = {
    remainingDays(job) {
        // Ajustes no job, Cáculo de tempo restante
        const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed() // toFixed - arredondar número
    
        const createdDate = new Date(job.created_at)
        const dueDay = createdDate.getDate() + Number(remainingDays)
        const dueDateInMs = createdDate.setDate(dueDay)
    
        const timeDiffInMs = dueDateInMs - Date.now()
    
        // Transformar milisegundos em dias
        const dayInMs = 1000 * 60 * 60 * 24
        const dayDiff = Math.floor(timeDiffInMs / dayInMs)
    
        // Total de dias retantes
        return dayDiff
    },
    calculateBudget: (job, valueHour) => valueHour * job['total-hours'],
}