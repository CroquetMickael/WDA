export const passwordValidator = (context: any, event: any) => {
  return context.password === "" && context.password !== undefined;
};

export const usernameValidator = (context: any, event: any) => {
  return context.username === "" && context.username !== undefined;
};
