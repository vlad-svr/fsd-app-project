import { type DropdownDirection } from '../../../types/ui'
import cls from './popup.module.scss'

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.options_bottom_left,
  'bottom right': cls.options_bottom_right,
  'top right': cls.options_top_right,
  'top left': cls.options_top_left
}
