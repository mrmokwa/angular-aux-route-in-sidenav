import { ItemConfigIdPipe } from './item-config-id.pipe';
import { ItemConfigPipe } from './item-config.pipe';
import { ItemPipe } from './item.pipe';

export * from './item-config-id.pipe';
export * from './item-config.pipe';
export * from './item.pipe';

export const ItemPipes = [ItemPipe, ItemConfigPipe, ItemConfigIdPipe];
