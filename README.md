# Support async function in tailwind.config


I am trying to build a plugin, which requires files to be read and 
processed by async functions. It seems tailwind.config.(t|j)s does
not like async functions in it's midst. 

Please see [`tailwind.config.ts`](./tailwind.config.ts) - 
- with `syncTheme()`, the "Custom Color" section works as expected
- with `asyncTheme()`, it does not.

