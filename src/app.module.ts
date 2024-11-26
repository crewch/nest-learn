import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { ProfileModule } from './profile/profile.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    CategoriesModule,
    ProfileModule,
    PostsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
