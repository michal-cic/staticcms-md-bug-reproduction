import { Field } from '@staticcms/core'

const languageSelectField: Field = {
   name: 'language',
   label: 'Language',
   widget: 'select',
   options: ['sk', 'en'],
   required: true,
}

export { languageSelectField }
