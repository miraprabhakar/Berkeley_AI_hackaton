import type { ModelMetadata } from "./types";

/**
 * Internal variable to indicate the framework version this package is built with.
 * @internal
 */
export const frameworkVersion = "^0.2.0";

/**
 * Internal variable to store model blobs with GraphQL typename as the key, and use them in the action code functions.
 * @internal
 */
export const modelsMap: Record<string, ModelMetadata> = {"User":{"key":"DataModel-AbE6Ftn6oeoW","name":"User","apiIdentifier":"user","namespace":[],"fields":{"ModelField-z_nshLCZtvzK-system-id":{"fieldType":"ID","key":"ModelField-z_nshLCZtvzK-system-id","name":"ID","apiIdentifier":"id","configuration":{"type":"IDConfig","key":"IDConfig-l3HN7NQlmdvD","createdDate":"2023-08-09T01:48:24.399Z"},"internalWritable":true},"ModelField-wqWHRmzW_kTX-system-createdAt":{"fieldType":"DateTime","key":"ModelField-wqWHRmzW_kTX-system-createdAt","name":"Created At","apiIdentifier":"createdAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-xviDWHxs2wXW","createdDate":"2023-08-09T01:48:24.400Z","includeTime":true,"default":null},"internalWritable":true},"ModelField-HfgV3RyUB7kN-system-updatedAt":{"fieldType":"DateTime","key":"ModelField-HfgV3RyUB7kN-system-updatedAt","name":"Updated At","apiIdentifier":"updatedAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-R4FRC1ng5nbL","createdDate":"2023-08-09T01:48:24.400Z","includeTime":true,"default":null},"internalWritable":true},"ModelField-B5ybIhwwVn6N":{"fieldType":"String","key":"ModelField-B5ybIhwwVn6N","name":"Last Name","apiIdentifier":"lastName","configuration":{"type":"StringConfig","key":"StringConfig-reqWKf02olq4","createdDate":"2023-08-09T01:48:24.440Z","default":null},"internalWritable":true},"ModelField-PJlrjTziOaaW":{"fieldType":"String","key":"ModelField-PJlrjTziOaaW","name":"First Name","apiIdentifier":"firstName","configuration":{"type":"StringConfig","key":"StringConfig-TIourZCaxIye","createdDate":"2023-08-09T01:48:24.438Z","default":null},"internalWritable":true},"ModelField-TpSIbF6yWe4d":{"fieldType":"HasMany","key":"ModelField-TpSIbF6yWe4d","name":"chats","apiIdentifier":"chats","configuration":{"type":"HasManyConfig","key":"HasManyConfig-MQHslrBrlMNl","createdDate":"2023-08-09T01:52:02.659Z","relatedModelKey":"DataModel-fucGk5SkRL1l","inverseFieldKey":"ModelField-dGskABvi6TCP","relatedModelApiIdentifier":null,"inverseFieldApiIdentifier":null,"dependent":"ignore"},"internalWritable":true},"ModelField-W8r2TV1TH70f":{"fieldType":"URL","key":"ModelField-W8r2TV1TH70f","name":"Google Image URL","apiIdentifier":"googleImageUrl","configuration":{"type":"URLConfig","key":"URLConfig-HP-LBeTsL5Z5","createdDate":"2023-08-09T01:48:24.447Z","default":null},"internalWritable":true},"ModelField-Z0wNz9GGbwQw":{"fieldType":"DateTime","key":"ModelField-Z0wNz9GGbwQw","name":"Last Signed In","apiIdentifier":"lastSignedIn","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-99GhMKPMhhAU","createdDate":"2023-08-09T01:48:24.452Z","includeTime":true,"default":null},"internalWritable":true},"ModelField-mxjvb1Mpy1WX":{"fieldType":"RoleAssignments","key":"ModelField-mxjvb1Mpy1WX","name":"Roles","apiIdentifier":"roles","configuration":{"type":"RoleAssignmentsConfig","key":"RoleAssignmentsConfig-Iz9vIk6OwrMJ","createdDate":"2023-08-09T01:48:24.450Z","default":["signed-in"]},"internalWritable":true},"ModelField-vofs8fHZoxgw":{"fieldType":"Email","key":"ModelField-vofs8fHZoxgw","name":"Email","apiIdentifier":"email","configuration":{"type":"EmailConfig","key":"EmailConfig-rk0lh-_kwHtV","createdDate":"2023-08-09T01:48:24.441Z","default":null},"internalWritable":true}},"graphqlTypeName":"User","stateChart":{"type":"StateChart","key":"StateChart-KFT2lUC0hmwh","createdDate":1691545704412,"actions":{"3skjcXtQt7Z7":{"type":"Action","key":"3skjcXtQt7Z7","createdDate":1691545704413,"name":"Update","preconditions":[],"onRunEffects":{"type":"EffectList","key":"EffectList-08JmWZTzTiKk","createdDate":1691545704413,"effects":{"_map":{"Effect-gqKsSlzGVw9-":{"type":"Effect","key":"Effect-gqKsSlzGVw9-","createdDate":1691545704425,"specID":"gadget/effect/actionRun","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-vbXTjX2F-5_r","createdDate":1691545704425,"values":{"sourceFilePath":"user/actions/update.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-gqKsSlzGVw9-","_tail":"Effect-gqKsSlzGVw9-"},"transactional":true},"onSuccessEffects":{"type":"EffectList","key":"EffectList-XV9UhRTF4bqs","createdDate":1691545704413,"effects":{"_map":{"Effect-5aSxxdZL1WJu":{"type":"Effect","key":"Effect-5aSxxdZL1WJu","createdDate":1691545704426,"specID":"gadget/effect/actionOnSuccess","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-CaKoqB0e-KNG","createdDate":1691545704426,"values":{"sourceFilePath":"user/actions/update.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-5aSxxdZL1WJu","_tail":"Effect-5aSxxdZL1WJu"},"transactional":false},"onFailureEffects":{"type":"EffectList","key":"EffectList-ah1RoNGr9oTh","createdDate":1691545704413,"effects":{"_map":{},"_orderKeys":{}},"transactional":false},"allowActionDeletion":false,"allowBulkInvocation":true,"sourceFilePath":"user/actions/update.js","triggers":{"Trigger-7P7f9yO2UjZC":{"type":"Trigger","key":"Trigger-7P7f9yO2UjZC","createdDate":1691545704426,"specID":"gadget/trigger/graphql_api","configuration":{"type":"UnstructuredTriggerConfiguration","key":"UnstructuredTriggerConfiguration-CFgLBuIeOxR5","values":{}}}},"customApiIdentifier":null,"timeout":"3 minutes"},"NHmcVES5wm-T":{"type":"Action","key":"NHmcVES5wm-T","createdDate":1691545704413,"name":"Delete","preconditions":[],"onRunEffects":{"type":"EffectList","key":"EffectList-BB0zRk-vMoAg","createdDate":1691545704413,"effects":{"_map":{"Effect-YbQ67FJvYpZq":{"type":"Effect","key":"Effect-YbQ67FJvYpZq","createdDate":1691545704429,"specID":"gadget/effect/actionRun","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-qXGYa4x_ALpo","createdDate":1691545704429,"values":{"sourceFilePath":"user/actions/delete.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-YbQ67FJvYpZq","_tail":"Effect-YbQ67FJvYpZq"},"transactional":true},"onSuccessEffects":{"type":"EffectList","key":"EffectList-N9wjceVNlVK7","createdDate":1691545704413,"effects":{"_map":{"Effect-B7I4zkiAW_Fb":{"type":"Effect","key":"Effect-B7I4zkiAW_Fb","createdDate":1691545704429,"specID":"gadget/effect/actionOnSuccess","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-7yV8_kkKOqEF","createdDate":1691545704429,"values":{"sourceFilePath":"user/actions/delete.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-B7I4zkiAW_Fb","_tail":"Effect-B7I4zkiAW_Fb"},"transactional":false},"onFailureEffects":{"type":"EffectList","key":"EffectList-CbBRQZgJtT7T","createdDate":1691545704413,"effects":{"_map":{},"_orderKeys":{}},"transactional":false},"allowActionDeletion":false,"allowBulkInvocation":true,"sourceFilePath":"user/actions/delete.js","triggers":{"Trigger-BTBFXvr0Xu4x":{"type":"Trigger","key":"Trigger-BTBFXvr0Xu4x","createdDate":1691545704430,"specID":"gadget/trigger/graphql_api","configuration":{"type":"UnstructuredTriggerConfiguration","key":"UnstructuredTriggerConfiguration-uCf00iuTEmQo","values":{}}}},"customApiIdentifier":null,"timeout":"3 minutes"},"Action-N9uG3eOex64J":{"type":"Action","key":"Action-N9uG3eOex64J","createdDate":1691545704454,"name":"signUp","preconditions":[],"onRunEffects":{"type":"EffectList","key":"EffectList-VZwuGlmvNSdn","createdDate":1691545704454,"effects":{"_map":{"Effect-1AcS0xsycY6E":{"type":"Effect","key":"Effect-1AcS0xsycY6E","createdDate":1691545704460,"specID":"gadget/effect/actionRun","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-rV6tKKCVl5Fc","createdDate":1691545704459,"values":{"sourceFilePath":"user/actions/signUp.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-1AcS0xsycY6E","_tail":"Effect-1AcS0xsycY6E"},"transactional":true},"onSuccessEffects":{"type":"EffectList","key":"EffectList-QeyQABepJTD0","createdDate":1691545704454,"effects":{"_map":{"Effect-gO551m2kC94_":{"type":"Effect","key":"Effect-gO551m2kC94_","createdDate":1691545704462,"specID":"gadget/effect/actionOnSuccess","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-AB_b67HgEAlW","createdDate":1691545704461,"values":{"sourceFilePath":"user/actions/signUp.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-gO551m2kC94_","_tail":"Effect-gO551m2kC94_"},"transactional":false},"onFailureEffects":{"type":"EffectList","key":"EffectList-c6hC-awNCgLA","createdDate":1691545704454,"effects":{"_map":{},"_orderKeys":{}},"transactional":false},"allowActionDeletion":true,"allowBulkInvocation":true,"sourceFilePath":"user/actions/signUp.js","triggers":{"Trigger-PikPFXiX1Ft7":{"type":"Trigger","key":"Trigger-PikPFXiX1Ft7","createdDate":1691545704455,"specID":"gadget/trigger/google_oauth/signup","configuration":{"type":"UnstructuredTriggerConfiguration","key":"UnstructuredTriggerConfiguration-ymfS_KER9nai","values":{}}}},"customApiIdentifier":"signUp","timeout":"3 minutes"},"Action-nF2d5m07yN8P":{"type":"Action","key":"Action-nF2d5m07yN8P","createdDate":1691545704464,"name":"signIn","preconditions":[],"onRunEffects":{"type":"EffectList","key":"EffectList-EId04_boAaAY","createdDate":1691545704464,"effects":{"_map":{"Effect-QScbxnbWObyb":{"type":"Effect","key":"Effect-QScbxnbWObyb","createdDate":1691545704468,"specID":"gadget/effect/actionRun","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-16s3FxcwYhDd","createdDate":1691545704468,"values":{"sourceFilePath":"user/actions/signIn.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-QScbxnbWObyb","_tail":"Effect-QScbxnbWObyb"},"transactional":true},"onSuccessEffects":{"type":"EffectList","key":"EffectList-qGAQ6DV8gNtG","createdDate":1691545704464,"effects":{"_map":{"Effect-znZsbG0tBxRB":{"type":"Effect","key":"Effect-znZsbG0tBxRB","createdDate":1691545704470,"specID":"gadget/effect/actionOnSuccess","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-cTv761CJWqRb","createdDate":1691545704470,"values":{"sourceFilePath":"user/actions/signIn.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-znZsbG0tBxRB","_tail":"Effect-znZsbG0tBxRB"},"transactional":false},"onFailureEffects":{"type":"EffectList","key":"EffectList-hjiSfzCKqoPX","createdDate":1691545704464,"effects":{"_map":{},"_orderKeys":{}},"transactional":false},"allowActionDeletion":true,"allowBulkInvocation":true,"sourceFilePath":"user/actions/signIn.js","triggers":{"Trigger-fTgSt9L-Xtre":{"type":"Trigger","key":"Trigger-fTgSt9L-Xtre","createdDate":1691545704465,"specID":"gadget/trigger/google_oauth/signin","configuration":{"type":"UnstructuredTriggerConfiguration","key":"UnstructuredTriggerConfiguration-8JpWHEVMu6EZ","values":{}}}},"customApiIdentifier":"signIn","timeout":"3 minutes"},"Action-yF3fBPk8KEM8":{"type":"Action","key":"Action-yF3fBPk8KEM8","createdDate":1691545704472,"name":"signOut","preconditions":[],"onRunEffects":{"type":"EffectList","key":"EffectList-eeMJdRUoqBym","createdDate":1691545704472,"effects":{"_map":{"Effect-aVfVFRBmTpwl":{"type":"Effect","key":"Effect-aVfVFRBmTpwl","createdDate":1691545704476,"specID":"gadget/effect/actionRun","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-V2jYecQiaCWR","createdDate":1691545704476,"values":{"sourceFilePath":"user/actions/signOut.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-aVfVFRBmTpwl","_tail":"Effect-aVfVFRBmTpwl"},"transactional":true},"onSuccessEffects":{"type":"EffectList","key":"EffectList-6ijsM2Fv8HKA","createdDate":1691545704472,"effects":{"_map":{"Effect-JCUstW7KuCxW":{"type":"Effect","key":"Effect-JCUstW7KuCxW","createdDate":1691545704478,"specID":"gadget/effect/actionOnSuccess","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-qL5O14Cfk4NC","createdDate":1691545704477,"values":{"sourceFilePath":"user/actions/signOut.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-JCUstW7KuCxW","_tail":"Effect-JCUstW7KuCxW"},"transactional":false},"onFailureEffects":{"type":"EffectList","key":"EffectList-_EKdoOXkvn5N","createdDate":1691545704472,"effects":{"_map":{},"_orderKeys":{}},"transactional":false},"allowActionDeletion":true,"allowBulkInvocation":true,"sourceFilePath":"user/actions/signOut.js","triggers":{"Trigger-YD0XaC5561a0":{"type":"Trigger","key":"Trigger-YD0XaC5561a0","createdDate":1691545704473,"specID":"gadget/trigger/graphql_api","configuration":{"type":"UnstructuredTriggerConfiguration","key":"UnstructuredTriggerConfiguration-dgMsiu54g3Ml","values":{}}}},"customApiIdentifier":"signOut","timeout":"3 minutes"}},"transitions":{"p08XK9p93U6I":{"type":"Transition","key":"p08XK9p93U6I","createdDate":1691545704414,"action":"NHmcVES5wm-T","fromAnchor":{"destination":{"type":"state-edge","state":"u_r1KB8jaVc4","edge":"BOTTOM"}},"toAnchor":{"destination":{"type":"state-edge","state":"20Jo_FRIvB3c","edge":"TOP"}}},"siS9Q6Evdese":{"type":"Transition","key":"siS9Q6Evdese","createdDate":1691545704413,"action":"3skjcXtQt7Z7","fromAnchor":{"destination":{"type":"state-edge","state":"u_r1KB8jaVc4","edge":"TOP"}},"toAnchor":{"destination":{"type":"state-edge","state":"u_r1KB8jaVc4","edge":"RIGHT"}}},"Transition-I-HrJdjSZjrk":{"type":"Transition","key":"Transition-I-HrJdjSZjrk","createdDate":1691545704471,"action":"Action-nF2d5m07yN8P","fromAnchor":{"destination":{"type":"state-edge","state":"u_r1KB8jaVc4","edge":"TOP"}},"toAnchor":{"destination":{"type":"state-edge","state":"u_r1KB8jaVc4","edge":"RIGHT"}}},"Transition-ouPCKsKkf6F0":{"type":"Transition","key":"Transition-ouPCKsKkf6F0","createdDate":1691545704479,"action":"Action-yF3fBPk8KEM8","fromAnchor":{"destination":{"type":"state-edge","state":"u_r1KB8jaVc4","edge":"TOP"}},"toAnchor":{"destination":{"type":"state-edge","state":"u_r1KB8jaVc4","edge":"RIGHT"}}},"Transition-oxxDq6KOVYCj":{"type":"Transition","key":"Transition-oxxDq6KOVYCj","createdDate":1691545704463,"action":"Action-N9uG3eOex64J","fromAnchor":{"destination":{"type":"state-edge","state":"F_CkwzyJixiC","edge":"BOTTOM"}},"toAnchor":{"destination":{"type":"state-edge","state":"u_r1KB8jaVc4","edge":"TOP"}}}},"stateInActionCode":false,"childStates":[{"type":"State","key":"F_CkwzyJixiC","createdDate":1691545704412,"name":"Start","isRecordBirthPlace":true,"isUndeleteableSystemState":true,"restoreHistory":true,"childStates":[],"customApiIdentifier":null},{"type":"State","key":"u_r1KB8jaVc4","createdDate":1691545704412,"name":"Created","isRecordBirthPlace":false,"isUndeleteableSystemState":true,"restoreHistory":true,"childStates":[],"customApiIdentifier":null},{"type":"State","key":"20Jo_FRIvB3c","createdDate":1691545704412,"name":"Deleted","isRecordBirthPlace":false,"isUndeleteableSystemState":false,"restoreHistory":true,"childStates":[],"customApiIdentifier":null}],"initialChildState":"F_CkwzyJixiC"}},"Session":{"key":"DataModel-DnFLrNWncJYv","name":"Session","apiIdentifier":"session","namespace":[],"fields":{"ModelField-2uH5Ag_gCYOv-system-id":{"fieldType":"ID","key":"ModelField-2uH5Ag_gCYOv-system-id","name":"ID","apiIdentifier":"id","configuration":{"type":"IDConfig","key":"IDConfig-LuotNRnJ94rb","createdDate":"2023-08-09T01:48:24.328Z"},"internalWritable":true},"ModelField-pNlT5dn9F3Wx-system-createdAt":{"fieldType":"DateTime","key":"ModelField-pNlT5dn9F3Wx-system-createdAt","name":"Created At","apiIdentifier":"createdAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-wcMchjvpH3JA","createdDate":"2023-08-09T01:48:24.328Z","includeTime":true,"default":null},"internalWritable":true},"ModelField-zA4MH2Q-LV0H-system-updatedAt":{"fieldType":"DateTime","key":"ModelField-zA4MH2Q-LV0H-system-updatedAt","name":"Updated At","apiIdentifier":"updatedAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-qbhKHd2dD9P5","createdDate":"2023-08-09T01:48:24.329Z","includeTime":true,"default":null},"internalWritable":true},"ModelField-DataModel-DnFLrNWncJYv-system-state":{"fieldType":"RecordState","key":"ModelField-DataModel-DnFLrNWncJYv-system-state","name":"State","apiIdentifier":"state","configuration":{"type":"RecordStateConfig","key":"RecordStateConfig-06CNWlLT2b2O","createdDate":"2023-08-09T01:48:24.349Z"},"internalWritable":true},"ModelField-pClnuKxRG_hr":{"fieldType":"BelongsTo","key":"ModelField-pClnuKxRG_hr","name":"User","apiIdentifier":"user","configuration":{"type":"BelongsToConfig","key":"BelongsToConfig-rvtFuP6wF5Q9","createdDate":"2023-08-09T01:48:24.506Z","relatedModelKey":"DataModel-AbE6Ftn6oeoW","relatedModelApiIdentifier":null},"internalWritable":true}},"graphqlTypeName":"Session","stateChart":{"type":"StateChart","key":"StateChart-vPxj_m82DORP","createdDate":1691545704330,"actions":{},"transitions":{},"stateInActionCode":false,"childStates":[{"type":"State","key":"State-6EEJCdE6cJfL","createdDate":1691545704356,"name":"Created","isRecordBirthPlace":false,"isUndeleteableSystemState":false,"restoreHistory":true,"childStates":[],"customApiIdentifier":null}],"initialChildState":"State-6EEJCdE6cJfL"}},"Message":{"key":"DataModel-Fbe0FkZ8k7_P","name":"message","apiIdentifier":"message","namespace":[],"fields":{"ModelField-KBwfSG_BMn1R-system-id":{"fieldType":"ID","key":"ModelField-KBwfSG_BMn1R-system-id","name":"ID","apiIdentifier":"id","configuration":{"type":"IDConfig","key":"IDConfig-WijcfHE4Px07","createdDate":"2023-08-09T01:50:24.229Z"},"internalWritable":true},"ModelField-2KK8GRXKrlVK-system-createdAt":{"fieldType":"DateTime","key":"ModelField-2KK8GRXKrlVK-system-createdAt","name":"Created At","apiIdentifier":"createdAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-Z6MOPPqLBnqG","createdDate":"2023-08-09T01:50:24.230Z","includeTime":true,"default":null},"internalWritable":true},"ModelField-w8C_3WnnN3u3-system-updatedAt":{"fieldType":"DateTime","key":"ModelField-w8C_3WnnN3u3-system-updatedAt","name":"Updated At","apiIdentifier":"updatedAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-nssUpjgngNXu","createdDate":"2023-08-09T01:50:24.231Z","includeTime":true,"default":null},"internalWritable":true},"ModelField-NgeVVywO9m58":{"fieldType":"String","key":"ModelField-NgeVVywO9m58","name":"content","apiIdentifier":"content","configuration":{"type":"StringConfig","key":"StringConfig-fjrPLBejPZlq","createdDate":"2023-08-09T01:50:31.740Z","default":null},"internalWritable":true},"ModelField-SLGQvdxfcAgc":{"fieldType":"Number","key":"ModelField-SLGQvdxfcAgc","name":"order","apiIdentifier":"order","configuration":{"type":"NumberConfig","key":"NumberConfig-qOclIJCUlqte","createdDate":"2023-08-09T02:16:39.409Z","decimals":null,"default":null},"internalWritable":true},"ModelField-UMh6klNYW7RJ":{"fieldType":"BelongsTo","key":"ModelField-UMh6klNYW7RJ","name":"chat","apiIdentifier":"chat","configuration":{"type":"BelongsToConfig","key":"BelongsToConfig-yAstoCeTwGiU","createdDate":"2023-08-09T01:52:45.665Z","relatedModelKey":"DataModel-fucGk5SkRL1l","relatedModelApiIdentifier":null},"internalWritable":true},"ModelField-tzXd6hIkKY_9":{"fieldType":"Enum","key":"ModelField-tzXd6hIkKY_9","name":"role","apiIdentifier":"role","configuration":{"type":"EnumConfig","key":"EnumConfig-fnukARSdNYpx","createdDate":"2023-08-09T01:51:14.235Z","allowMultiple":false,"allowOther":false,"options":[{"type":"EnumOption","key":"EnumOption-gMR5Xo-NUxyx","createdDate":1691545874235,"name":"system","color":"#FCFCFC"},{"type":"EnumOption","key":"EnumOption-yj72t4hAZKv5","createdDate":1691545882785,"name":"user","color":"#606060"},{"type":"EnumOption","key":"EnumOption-C5qi0i93YpCZ","createdDate":1691545886733,"name":"assistant","color":"#DF2222"}],"default":null},"internalWritable":true}},"graphqlTypeName":"Message","stateChart":{"type":"StateChart","key":"StateChart-Nhpjpz5oHYpa","createdDate":1691545824240,"actions":{"BvQYDmYR_vZh":{"type":"Action","key":"BvQYDmYR_vZh","createdDate":1691545824240,"name":"Update","preconditions":[],"onRunEffects":{"type":"EffectList","key":"EffectList-DtwXUYQ5zrjx","createdDate":1691545824240,"effects":{"_map":{"Effect-1pKvhtvck2Be":{"type":"Effect","key":"Effect-1pKvhtvck2Be","createdDate":1691545824247,"specID":"gadget/effect/actionRun","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-0zlZodYyUs4O","createdDate":1691545824247,"values":{"sourceFilePath":"message/actions/update.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-1pKvhtvck2Be","_tail":"Effect-1pKvhtvck2Be"},"transactional":true},"onSuccessEffects":{"type":"EffectList","key":"EffectList-Cyg5oU9TYwUG","createdDate":1691545824240,"effects":{"_map":{"Effect-bacD5lMjTCuX":{"type":"Effect","key":"Effect-bacD5lMjTCuX","createdDate":1691545824247,"specID":"gadget/effect/actionOnSuccess","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-nguNA8i-ENbm","createdDate":1691545824248,"values":{"sourceFilePath":"message/actions/update.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-bacD5lMjTCuX","_tail":"Effect-bacD5lMjTCuX"},"transactional":false},"onFailureEffects":{"type":"EffectList","key":"EffectList-NR9CuFRLzM2h","createdDate":1691545824240,"effects":{"_map":{},"_orderKeys":{}},"transactional":false},"allowActionDeletion":false,"allowBulkInvocation":true,"sourceFilePath":"message/actions/update.js","triggers":{"Trigger-qvYSq6hDEsmK":{"type":"Trigger","key":"Trigger-qvYSq6hDEsmK","createdDate":1691545824248,"specID":"gadget/trigger/graphql_api","configuration":{"type":"UnstructuredTriggerConfiguration","key":"UnstructuredTriggerConfiguration-AlyVYOQoDQQR","values":{}}}},"customApiIdentifier":null,"timeout":"3 minutes"},"VF0eYdIOxBN0":{"type":"Action","key":"VF0eYdIOxBN0","createdDate":1691545824240,"name":"Create","preconditions":[],"onRunEffects":{"type":"EffectList","key":"EffectList-DjCmlx4txtwv","createdDate":1691545824240,"effects":{"_map":{"Effect-ZRq7xFTNWMzc":{"type":"Effect","key":"Effect-ZRq7xFTNWMzc","createdDate":1691545824244,"specID":"gadget/effect/actionRun","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-8BLiJ0cobraU","createdDate":1691545824244,"values":{"sourceFilePath":"message/actions/create.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-ZRq7xFTNWMzc","_tail":"Effect-ZRq7xFTNWMzc"},"transactional":true},"onSuccessEffects":{"type":"EffectList","key":"EffectList-Jty2Ye8WNRG2","createdDate":1691545824240,"effects":{"_map":{"Effect-4Q8CPJ-Invl_":{"type":"Effect","key":"Effect-4Q8CPJ-Invl_","createdDate":1691545824244,"specID":"gadget/effect/actionOnSuccess","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-_dHaWNBFj8wY","createdDate":1691545824244,"values":{"sourceFilePath":"message/actions/create.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-4Q8CPJ-Invl_","_tail":"Effect-4Q8CPJ-Invl_"},"transactional":false},"onFailureEffects":{"type":"EffectList","key":"EffectList-vwUsnF8WDkY0","createdDate":1691545824240,"effects":{"_map":{},"_orderKeys":{}},"transactional":false},"allowActionDeletion":false,"allowBulkInvocation":true,"sourceFilePath":"message/actions/create.js","triggers":{"Trigger-ZorRlwxDwt4A":{"type":"Trigger","key":"Trigger-ZorRlwxDwt4A","createdDate":1691545824244,"specID":"gadget/trigger/graphql_api","configuration":{"type":"UnstructuredTriggerConfiguration","key":"UnstructuredTriggerConfiguration-yq0BdDcLJG-S","values":{}}}},"customApiIdentifier":null,"timeout":"3 minutes"},"WG8MroUTRPVF":{"type":"Action","key":"WG8MroUTRPVF","createdDate":1691545824240,"name":"Delete","preconditions":[],"onRunEffects":{"type":"EffectList","key":"EffectList-h-5_dw3eSqBh","createdDate":1691545824240,"effects":{"_map":{"Effect-vYMwclxuzdUh":{"type":"Effect","key":"Effect-vYMwclxuzdUh","createdDate":1691545824250,"specID":"gadget/effect/actionRun","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-sm3gc8vhoVFb","createdDate":1691545824250,"values":{"sourceFilePath":"message/actions/delete.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-vYMwclxuzdUh","_tail":"Effect-vYMwclxuzdUh"},"transactional":true},"onSuccessEffects":{"type":"EffectList","key":"EffectList-hn9TaeEwm-am","createdDate":1691545824240,"effects":{"_map":{"Effect-yAnvvknP5xmX":{"type":"Effect","key":"Effect-yAnvvknP5xmX","createdDate":1691545824250,"specID":"gadget/effect/actionOnSuccess","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-cVE5gJk7F5mw","createdDate":1691545824250,"values":{"sourceFilePath":"message/actions/delete.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-yAnvvknP5xmX","_tail":"Effect-yAnvvknP5xmX"},"transactional":false},"onFailureEffects":{"type":"EffectList","key":"EffectList-8PJV0_5CcbPw","createdDate":1691545824240,"effects":{"_map":{},"_orderKeys":{}},"transactional":false},"allowActionDeletion":false,"allowBulkInvocation":true,"sourceFilePath":"message/actions/delete.js","triggers":{"Trigger-VKX6rHYg4iR7":{"type":"Trigger","key":"Trigger-VKX6rHYg4iR7","createdDate":1691545824251,"specID":"gadget/trigger/graphql_api","configuration":{"type":"UnstructuredTriggerConfiguration","key":"UnstructuredTriggerConfiguration-3Pibm56-WzXX","values":{}}}},"customApiIdentifier":null,"timeout":"3 minutes"}},"transitions":{"PKq1JgPdpgOM":{"type":"Transition","key":"PKq1JgPdpgOM","createdDate":1691545824241,"action":"VF0eYdIOxBN0","fromAnchor":{"destination":{"type":"state-edge","state":"qP7ArxwPXy2g","edge":"BOTTOM"}},"toAnchor":{"destination":{"type":"state-edge","state":"mruNA_8jRznM","edge":"TOP"}}},"bJ7YNDGVdX3D":{"type":"Transition","key":"bJ7YNDGVdX3D","createdDate":1691545824241,"action":"BvQYDmYR_vZh","fromAnchor":{"destination":{"type":"state-edge","state":"mruNA_8jRznM","edge":"TOP"}},"toAnchor":{"destination":{"type":"state-edge","state":"mruNA_8jRznM","edge":"RIGHT"}}},"l1CF7H5ruAKE":{"type":"Transition","key":"l1CF7H5ruAKE","createdDate":1691545824241,"action":"WG8MroUTRPVF","fromAnchor":{"destination":{"type":"state-edge","state":"mruNA_8jRznM","edge":"BOTTOM"}},"toAnchor":{"destination":{"type":"state-edge","state":"c-krOebvlqDE","edge":"TOP"}}}},"stateInActionCode":false,"childStates":[{"type":"State","key":"qP7ArxwPXy2g","createdDate":1691545824240,"name":"Start","isRecordBirthPlace":true,"isUndeleteableSystemState":true,"restoreHistory":true,"childStates":[],"customApiIdentifier":null},{"type":"State","key":"mruNA_8jRznM","createdDate":1691545824240,"name":"Created","isRecordBirthPlace":false,"isUndeleteableSystemState":true,"restoreHistory":true,"childStates":[],"customApiIdentifier":null},{"type":"State","key":"c-krOebvlqDE","createdDate":1691545824240,"name":"Deleted","isRecordBirthPlace":false,"isUndeleteableSystemState":false,"restoreHistory":true,"childStates":[],"customApiIdentifier":null}],"initialChildState":"qP7ArxwPXy2g"}},"Chat":{"key":"DataModel-fucGk5SkRL1l","name":"chat","apiIdentifier":"chat","namespace":[],"fields":{"ModelField-9wnYrnK0GUb5-system-id":{"fieldType":"ID","key":"ModelField-9wnYrnK0GUb5-system-id","name":"ID","apiIdentifier":"id","configuration":{"type":"IDConfig","key":"IDConfig-I01b3rcqFET-","createdDate":"2023-08-09T01:51:44.350Z"},"internalWritable":true},"ModelField-J_XXqRoan_cC-system-createdAt":{"fieldType":"DateTime","key":"ModelField-J_XXqRoan_cC-system-createdAt","name":"Created At","apiIdentifier":"createdAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-WzWdTayLjlYQ","createdDate":"2023-08-09T01:51:44.350Z","includeTime":true,"default":null},"internalWritable":true},"ModelField-PquljQOXjNVx-system-updatedAt":{"fieldType":"DateTime","key":"ModelField-PquljQOXjNVx-system-updatedAt","name":"Updated At","apiIdentifier":"updatedAt","configuration":{"type":"DateTimeConfig","key":"DateTimeConfig-oOcZGMMvEMwr","createdDate":"2023-08-09T01:51:44.350Z","includeTime":true,"default":null},"internalWritable":true},"ModelField-IXHkN9Bz3I_z":{"fieldType":"String","key":"ModelField-IXHkN9Bz3I_z","name":"name","apiIdentifier":"name","configuration":{"type":"StringConfig","key":"StringConfig-RPsbYm0XoqFv","createdDate":"2023-08-09T01:54:03.612Z","default":null},"internalWritable":true},"ModelField-dGskABvi6TCP":{"fieldType":"BelongsTo","key":"ModelField-dGskABvi6TCP","name":"user","apiIdentifier":"user","configuration":{"type":"BelongsToConfig","key":"BelongsToConfig-Donq_odm3T05","createdDate":"2023-08-09T01:51:58.501Z","relatedModelKey":"DataModel-AbE6Ftn6oeoW","relatedModelApiIdentifier":null},"internalWritable":true},"ModelField-pgSF7RO8Aoda":{"fieldType":"HasMany","key":"ModelField-pgSF7RO8Aoda","name":"messages","apiIdentifier":"messages","configuration":{"type":"HasManyConfig","key":"HasManyConfig-XC2BSNbaqug5","createdDate":"2023-08-09T01:52:53.835Z","relatedModelKey":"DataModel-Fbe0FkZ8k7_P","inverseFieldKey":"ModelField-UMh6klNYW7RJ","relatedModelApiIdentifier":null,"inverseFieldApiIdentifier":null,"dependent":"ignore"},"internalWritable":true}},"graphqlTypeName":"Chat","stateChart":{"type":"StateChart","key":"StateChart-fh4a6R-hc-oe","createdDate":1691545904355,"actions":{"9dj1nHoab4CW":{"type":"Action","key":"9dj1nHoab4CW","createdDate":1691545904355,"name":"Update","preconditions":[],"onRunEffects":{"type":"EffectList","key":"EffectList-OWA6A__YtEWh","createdDate":1691545904355,"effects":{"_map":{"Effect-mpVrdr1jQFK2":{"type":"Effect","key":"Effect-mpVrdr1jQFK2","createdDate":1691545904359,"specID":"gadget/effect/actionRun","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-DLdqCHXcmjpg","createdDate":1691545904359,"values":{"sourceFilePath":"chat/actions/update.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-mpVrdr1jQFK2","_tail":"Effect-mpVrdr1jQFK2"},"transactional":true},"onSuccessEffects":{"type":"EffectList","key":"EffectList-J0v32xX62fAr","createdDate":1691545904355,"effects":{"_map":{"Effect-Vb45qn4wEtae":{"type":"Effect","key":"Effect-Vb45qn4wEtae","createdDate":1691545904359,"specID":"gadget/effect/actionOnSuccess","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-klcjuNgJQN2B","createdDate":1691545904359,"values":{"sourceFilePath":"chat/actions/update.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-Vb45qn4wEtae","_tail":"Effect-Vb45qn4wEtae"},"transactional":false},"onFailureEffects":{"type":"EffectList","key":"EffectList-0lP1TETH_cKw","createdDate":1691545904356,"effects":{"_map":{},"_orderKeys":{}},"transactional":false},"allowActionDeletion":false,"allowBulkInvocation":true,"sourceFilePath":"chat/actions/update.js","triggers":{"Trigger-PziGMcN-SBL8":{"type":"Trigger","key":"Trigger-PziGMcN-SBL8","createdDate":1691545904359,"specID":"gadget/trigger/graphql_api","configuration":{"type":"UnstructuredTriggerConfiguration","key":"UnstructuredTriggerConfiguration-xnxg01YaK1zO","values":{}}}},"customApiIdentifier":null,"timeout":"3 minutes"},"XPOqxDKiLpei":{"type":"Action","key":"XPOqxDKiLpei","createdDate":1691545904355,"name":"Create","preconditions":[],"onRunEffects":{"type":"EffectList","key":"EffectList--Ll09VPNv1_R","createdDate":1691545904355,"effects":{"_map":{"Effect-YTIOExmwXgVp":{"type":"Effect","key":"Effect-YTIOExmwXgVp","createdDate":1691545904357,"specID":"gadget/effect/actionRun","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-iL15mp6PvKwa","createdDate":1691545904357,"values":{"sourceFilePath":"chat/actions/create.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-YTIOExmwXgVp","_tail":"Effect-YTIOExmwXgVp"},"transactional":true},"onSuccessEffects":{"type":"EffectList","key":"EffectList-zWBUDaAvszoz","createdDate":1691545904355,"effects":{"_map":{"Effect-eahIEFakwG58":{"type":"Effect","key":"Effect-eahIEFakwG58","createdDate":1691545904357,"specID":"gadget/effect/actionOnSuccess","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-Xo4R0lJBbA6_","createdDate":1691545904357,"values":{"sourceFilePath":"chat/actions/create.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-eahIEFakwG58","_tail":"Effect-eahIEFakwG58"},"transactional":false},"onFailureEffects":{"type":"EffectList","key":"EffectList-OomuiAQ_EzE0","createdDate":1691545904355,"effects":{"_map":{},"_orderKeys":{}},"transactional":false},"allowActionDeletion":false,"allowBulkInvocation":true,"sourceFilePath":"chat/actions/create.js","triggers":{"Trigger-tDyECDa10u1Q":{"type":"Trigger","key":"Trigger-tDyECDa10u1Q","createdDate":1691545904357,"specID":"gadget/trigger/graphql_api","configuration":{"type":"UnstructuredTriggerConfiguration","key":"UnstructuredTriggerConfiguration-6woWVzxUgqhC","values":{}}}},"customApiIdentifier":null,"timeout":"3 minutes"},"nvzdSI-Z4Zrm":{"type":"Action","key":"nvzdSI-Z4Zrm","createdDate":1691545904356,"name":"Delete","preconditions":[],"onRunEffects":{"type":"EffectList","key":"EffectList-xWOqwU3BtIfl","createdDate":1691545904356,"effects":{"_map":{"Effect--j9r4-zFZDAQ":{"type":"Effect","key":"Effect--j9r4-zFZDAQ","createdDate":1691545904360,"specID":"gadget/effect/actionRun","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-63Xd0EY96tth","createdDate":1691545904360,"values":{"sourceFilePath":"chat/actions/delete.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect--j9r4-zFZDAQ","_tail":"Effect--j9r4-zFZDAQ"},"transactional":true},"onSuccessEffects":{"type":"EffectList","key":"EffectList-QpUxxgqhfgKN","createdDate":1691545904356,"effects":{"_map":{"Effect-P6U5GPlsAWio":{"type":"Effect","key":"Effect-P6U5GPlsAWio","createdDate":1691545904360,"specID":"gadget/effect/actionOnSuccess","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-TVvRTp6YRgaI","createdDate":1691545904360,"values":{"sourceFilePath":"chat/actions/delete.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-P6U5GPlsAWio","_tail":"Effect-P6U5GPlsAWio"},"transactional":false},"onFailureEffects":{"type":"EffectList","key":"EffectList-FYg6i7iNY9yd","createdDate":1691545904356,"effects":{"_map":{},"_orderKeys":{}},"transactional":false},"allowActionDeletion":false,"allowBulkInvocation":true,"sourceFilePath":"chat/actions/delete.js","triggers":{"Trigger-MPpttg0Yrdbo":{"type":"Trigger","key":"Trigger-MPpttg0Yrdbo","createdDate":1691545904361,"specID":"gadget/trigger/graphql_api","configuration":{"type":"UnstructuredTriggerConfiguration","key":"UnstructuredTriggerConfiguration-uMp1z_PtzuaJ","values":{}}}},"customApiIdentifier":null,"timeout":"3 minutes"},"Action-u-5jLqa-QQ_N":{"type":"Action","key":"Action-u-5jLqa-QQ_N","createdDate":1691723163325,"name":"name","preconditions":[],"onRunEffects":{"type":"EffectList","key":"EffectList-07Qr83NbDZnV","createdDate":1691723163325,"effects":{"_map":{"Effect-zx0ZofmHVgwP":{"type":"Effect","key":"Effect-zx0ZofmHVgwP","createdDate":1691723163329,"specID":"gadget/effect/actionRun","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-Y26-oS5OyIpu","createdDate":1691723163329,"values":{"sourceFilePath":"chat/actions/name.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-zx0ZofmHVgwP","_tail":"Effect-zx0ZofmHVgwP"},"transactional":false},"onSuccessEffects":{"type":"EffectList","key":"EffectList--ILVw_nSQgnN","createdDate":1691723163325,"effects":{"_map":{"Effect-w7FXe7dRAAgn":{"type":"Effect","key":"Effect-w7FXe7dRAAgn","createdDate":1691723163329,"specID":"gadget/effect/actionOnSuccess","configuration":{"type":"EffectConfiguration","key":"EffectConfiguration-Z0Cm7isqiQAW","createdDate":1691723163329,"values":{"sourceFilePath":"chat/actions/name.js"}},"order":"a0"}},"_orderKeys":{"a0":true},"_head":"Effect-w7FXe7dRAAgn","_tail":"Effect-w7FXe7dRAAgn"},"transactional":false},"onFailureEffects":{"type":"EffectList","key":"EffectList-yPWGmYPwRxCV","createdDate":1691723163325,"effects":{"_map":{},"_orderKeys":{}},"transactional":false},"allowActionDeletion":true,"allowBulkInvocation":true,"sourceFilePath":"chat/actions/name.js","triggers":{"Trigger-j6znJUqp9cOv":{"type":"Trigger","key":"Trigger-j6znJUqp9cOv","createdDate":1691723163327,"specID":"gadget/trigger/graphql_api","configuration":{"type":"UnstructuredTriggerConfiguration","key":"UnstructuredTriggerConfiguration-XVqmK5avWY5R","values":{}}}},"customApiIdentifier":"name","timeout":"3 minutes"}},"transitions":{"VsTvD1UJ-7uI":{"type":"Transition","key":"VsTvD1UJ-7uI","createdDate":1691545904356,"action":"XPOqxDKiLpei","fromAnchor":{"destination":{"type":"state-edge","state":"eheD6ysDK0Zo","edge":"BOTTOM"}},"toAnchor":{"destination":{"type":"state-edge","state":"sVjRWhoYbQub","edge":"TOP"}}},"nUhKskW4qcvo":{"type":"Transition","key":"nUhKskW4qcvo","createdDate":1691545904356,"action":"nvzdSI-Z4Zrm","fromAnchor":{"destination":{"type":"state-edge","state":"sVjRWhoYbQub","edge":"BOTTOM"}},"toAnchor":{"destination":{"type":"state-edge","state":"ddoz_ybr2zdv","edge":"TOP"}}},"xLI8rPzZBxDM":{"type":"Transition","key":"xLI8rPzZBxDM","createdDate":1691545904356,"action":"9dj1nHoab4CW","fromAnchor":{"destination":{"type":"state-edge","state":"sVjRWhoYbQub","edge":"TOP"}},"toAnchor":{"destination":{"type":"state-edge","state":"sVjRWhoYbQub","edge":"RIGHT"}}},"Transition-tXek346JumHU":{"type":"Transition","key":"Transition-tXek346JumHU","createdDate":1691723163327,"action":"Action-u-5jLqa-QQ_N","fromAnchor":{"destination":{"type":"state-edge","state":"sVjRWhoYbQub","edge":"TOP"}},"toAnchor":{"destination":{"type":"state-edge","state":"sVjRWhoYbQub","edge":"RIGHT"}}}},"stateInActionCode":false,"childStates":[{"type":"State","key":"eheD6ysDK0Zo","createdDate":1691545904355,"name":"Start","isRecordBirthPlace":true,"isUndeleteableSystemState":true,"restoreHistory":true,"childStates":[],"customApiIdentifier":null},{"type":"State","key":"sVjRWhoYbQub","createdDate":1691545904355,"name":"Created","isRecordBirthPlace":false,"isUndeleteableSystemState":true,"restoreHistory":true,"childStates":[],"customApiIdentifier":null},{"type":"State","key":"ddoz_ybr2zdv","createdDate":1691545904355,"name":"Deleted","isRecordBirthPlace":false,"isUndeleteableSystemState":false,"restoreHistory":true,"childStates":[],"customApiIdentifier":null}],"initialChildState":"eheD6ysDK0Zo"}}};

/**
 * Internal variable to map model apiIdentifier to GraphQL typename in modelsMap.
 * @internal
 */
export const modelListIndex: Record<string, string> = {"api:user":"User","api:session":"Session","api:message":"Message","api:chat":"Chat"};
