import { User, UserType } from '../../types/index.js';
import { getModelForClass, prop, defaultClasses } from '@typegoose/typegoose';

export class UserEntity extends defaultClasses.TimeStamps implements User {
  @prop({ unique: true, required: true })
  public email: string;

  @prop({ required: true, default: '' })
  public avatar?: string | undefined;

  @prop({ required: true })
  public name: string;

  @prop({ required: true })
  public password: string;

  @prop({ required: true })
  public userType: UserType;
}
