import { atom, selector } from 'recoil'
import { getPhone } from './phones'

export const selectedPhonesState = atom<[string, string, string]>({
  key: 'selectedPhones',
  default: ['iphone12pro', 'galaxys21+', 'velvet']
})

export const selectedPhonesDataState = selector({
  key: 'selectedPhonesData',
  get: ({ get }) => {
    const phones = get(selectedPhonesState)
    return phones.map(phone => getPhone(phone))
  }
})

export const questionIndexState = atom<number>({
  key: 'questionIndex',
  default: 0
})

export const questionTagsState = atom<Record<string, boolean>>({
  key: 'questionTags',
  default: {}
})