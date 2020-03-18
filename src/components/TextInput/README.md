# Text Input


## Usage

```js
import { TextInput } from '@dentsu/components';
```

```jsx
<TextInput />
```

## Prop Types

**defaultValue** `string`<br />
Initial value of the input, for uncontrolled usage.

---

**value** `string`<br />
Form value of the input, for controlled usage.

---

**disabled** `boolean` = *false*<br />
Whether this action is non-interactive.

---

**fill** `boolean` = *false*<br />
Whether this text input should expand to fill its container.

---

**size** `enum`<br />
One of <`small`, **`medium`**, `large`><br />
The size of the text input.

---

**placeholder** `string`<br />
Placeholder text in the absence of any value.

---

**onChange** `function`<br />
Change event handler. Use `event.target.value` for new value.

---

**onBlur** `function`

---

**onFocus** `function`

---

**pattern** `string`

---

**label** `string`

---

**prefix** `node`

---

**suffix** `node`

---

**minLength** `number`

---

**maxLength** `number`

---

**id** `string`

---

**autoComplete** `boolean`

---

**readOnly** `boolean`

---

**invalid** `boolean`