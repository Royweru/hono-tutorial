import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono()


app.get('/api/smalldata',(c)=>{
    return c.json({
        nice:true,
        name:"I can't guess sorry"
    })
})

export const GET = handle(app);
export default app