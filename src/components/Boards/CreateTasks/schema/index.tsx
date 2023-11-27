import { z } from "zod";


export type createTasksSchema= z.infer<
typeof createTaskSchemaValues
>;

export const createTaskSchemaValues = z.object({
tittle: z.string({
  required_error: "Field is required",
})
.min(1, { message: "Field is required" }),
description: z
.string({
  required_error: "Field is required",
})
.min(1, { message: "Field is required" }),
DeliveryDate: z.string({
  required_error: "Field is required",
})
.min(1, { message: "Field is required" }),
CreateDate: z.string({
  required_error: "Field is required",
})
.min(1, { message: "Field is required" }),

});
