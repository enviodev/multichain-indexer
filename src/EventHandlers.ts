/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import { indexer, UniswapV3Factory_PoolCreated } from "envio";

indexer.onEvent(
  { contract: "UniswapV3Factory", event: "PoolCreated" },
  async ({ event, context }) => {
  const entity: UniswapV3Factory_PoolCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pool: event.params.pool,
  };

  context.UniswapV3Factory_PoolCreated.set(entity);
}
);
