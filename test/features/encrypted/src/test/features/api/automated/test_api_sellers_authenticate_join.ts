import typia, { Primitive } from "typia";

import api from "./../../../../api";
import type { ISeller } from "./../../../../api/structures/ISeller";

export const test_api_sellers_authenticate_join = async (
    connection: api.IConnection
): Promise<void> => {
    const output: Primitive<ISeller.IAuthorized> = 
        await api.functional.sellers.authenticate.join(
            connection,
            typia.random<Primitive<ISeller.IJoin>>(),
        );
    typia.assert(output);
};