import { NestFactory } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

const PORT = parseInt(process.env.PORT, 10) || 8080;



async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'), {prefix:'/public'});

  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: '*',
    credentials: true
  })
  const configService = app.get(ConfigService);

  const port = configService.get('PORT');
  const dbUri = configService.get('DATABASE_URI');
  const dbName = configService.get('DATABASE_NAME');
  const dbUser = configService.get('DATABASE_USER');
  const dbPass = configService.get('DATABASE_PASS');
  const dbMongo = configService.get('MONGO_URL');


  await app.listen(PORT, () => {
    console.log(`🚀 Application running at port ${PORT}`);
    console.log(port, dbUri, dbName, dbUser, dbPass, dbMongo, process.env.PORT);
  })

  // await app.listen(3000);
  // console.log('Server START!');
}
bootstrap();
