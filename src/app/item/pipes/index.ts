import { ItemConfigObsPipe, ItemConfigPipe } from './item-config.pipe';
import { ItemPipe } from './item.pipe';

export * from './item.pipe';
export * from './item-config.pipe';

export const ItemPipes = [ItemPipe, ItemConfigPipe, ItemConfigObsPipe];
