import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import Query from 'classes/sql_query'

const port = 3000
const query = new Query()
const app = new Elysia()

await query.init()

app.use(cors())
app.post('/', () => 'Backend API RUNNING')
app.get('/desc_table', async () => {
    try {
        return await query.executeQuery('DESC admin')
    } catch (err: any) {
        return {
            error: true,
            message: err.message
        }
    }
})
app.listen(port)

console.log(`Server API running at http://localhost:${port}`)