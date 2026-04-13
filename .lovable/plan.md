
## Plan: Migrate ContactForm to Web3Forms

### What changes
Update `src/components/ContactForm.tsx` to:

1. **Switch endpoint** from FormSubmit to `https://api.web3forms.com/submit`
2. **Add hidden field** `access_key` = `1747e825-3f4a-4d1c-8253-85252503cf5e`
3. **Remove** all FormSubmit-specific hidden fields (`_subject`, `_template`, `_captcha`, `_next`)
4. **Replace form fields** with the new mapping:
   - Name → `user_name`
   - Email → `user_email`
   - Store URL → `store_url`
   - Platform → `platform`
   - Product count → `product_count`
   - Challenge → `challenge` (textarea)
5. **Handle submission via `fetch`** to POST JSON to Web3Forms, then show success state with the message: *"Thank you! Your application has been received. I'll get back to you soon."*

### Files modified
- `src/components/ContactForm.tsx` — full rewrite of form fields and submission logic

### Notes
- The access key is a public key (safe to store in code per Web3Forms docs)
- The form will use `fetch` with JSON body instead of native form action, so we can control the success message display in-app without a redirect
