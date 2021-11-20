import * as express from 'express'

const app = express()
const port = 3000

app.get('/', (req: express.Request, res: express.Response) => {
	res.json({
		message: 'Hello world',
	})
})

app.listen(port, () => console.log(`Timepunch server listening on port ${port}!`))
