/**
 * @author Hanyuu
 */
console.log("[info] index loaded.");
import path from 'path';
import Koa from 'koa';
import koaRouter from 'koa-router';
import parser from 'koa-bodyparser';
// import koaStatic from 'koa-static';
import fs from 'fs';
import data from "./database";
import { User, Good, UserInterface, GoodInterface } from './role';
import { DatabaseError } from 'sequelize/types';

const router = new koaRouter();
// const staticPath = path.join(__dirname,'../src/asset')
// const staticPath = '../src/asset';
function webServer()
{
	try
	{
		const database = new data();;
		const app = new Koa();
		app.use(parser());
		app.use(router.routes());
		router.get('/item/:itemid', async (ctx, next) =>
		{
			const res = await database.queryGood(ctx.params.itemid);
			ctx.response.body = JSON.stringify(res);
			ctx.response.type = 'application/json';
		})
		router.get('/user/:uuid', async (ctx, next) =>
		{
			// const res = await getUser(ctx.params.uuid);
			const res = await database.queryUser(ctx.params.uuid);
			ctx.response.body = JSON.stringify(res);
			ctx.response.type = 'application/json';
		})
		router.post('/user/login', async (ctx, next) =>
		{
			console.log(ctx.request.body);
			const res = await database.loginByPhonenumber(ctx.request.body);
			ctx.response.body = JSON.stringify(res);
			ctx.response.type = 'application/json';
		})
		router.post('/user/register', async (ctx, next) =>
		{
			//ON DEV ONLY!!!
			if (ctx.request.body.devtoken != "412458ea93597da7a7f9e72a9469bc86c49c4bfb")
			{
				ctx.response.body = "reject";
				ctx.response.type = 'application/json';
				return;
			};
			//ON DEV ONLY!!!
			var newUser = new Object() as UserInterface;
			newUser = ctx.request.body;
			newUser.score = 10;
			newUser.verified = false;
			const res = await database.writeUser(newUser);
			ctx.response.body = JSON.stringify(res);
			ctx.response.type = 'application/json';
		})
		router.post('/item/add', async (ctx, next) =>
		{
			//ON DEV ONLY!!!
			if (ctx.request.body.devtoken != "412458ea93597da7a7f9e72a9469bc86c49c4bfb")
			{
				ctx.response.body = "reject";
				ctx.response.type = 'application/json';
				return;
			};
			//ON DEV ONLY!!!
			var newGood = new Object() as GoodInterface;
			newGood = ctx.request.body;
			newGood.sold = 0;
			const res = await database.writeGood(newGood);
			ctx.response.body = JSON.stringify(res);
			ctx.response.type = 'application/json';
		})
		app.listen(4000);
	} catch (error)
	{
		console.error(error);
	}
}
export default webServer;