import { ColorConfig } from '@/components/(sliders)/cases-slider/cases-slide'

export interface SliderCase {
  sphere: {
    value: string
    color: keyof ColorConfig
  }
  description: string
  indicators: {
    title: string
    description: string
  }[]
  additional:
    | {
        indicators: {
          title: {
            value: string
            crossed?: string
          }
          description: string
        }[]
      }
    | {
        largeIndicator: {
          title: {
            value: string
            crossed: string
          }
          description: string
        }
      }
    | {
        disclaimerIndicator: {
          title: string
          description: string
          disclaimer: {
            value: string
            bold: string
          }
        }
      }
}

export const casesForSlider: SliderCase[] = [
  {
    sphere: {
      value: 'Сфера: производство и продажа мебели',
      color: 'sky',
    },
    description:
      'Взяли под контроль все звонки и подняли продажи на 27% всего за 3 месяца',
    indicators: [
      {
        title: '+27%',
        description: 'Рост выручки за 3 месяца',
      },
      {
        title: '+1900$/мес',
        description: 'Экономия на ФОТ отдела контроля качества',
      },
    ],
    additional: {
      indicators: [
        {
          title: {
            value: '2',
            crossed: '5',
          },
          description: 'Человека в контроле качества',
        },
        {
          title: {
            value: '100%',
          },
          description: 'Звонков слушают',
        },
      ],
    },
  },
  {
    sphere: {
      value: 'Сфера: сеть ювелирных',
      color: 'orange',
    },
    description:
      'Подтвердили на цифрах, что текущий штат не справляется, наняли +1 продавца и подняли выручку на 31%',
    indicators: [
      {
        title: '+31%',
        description: 'Рост выручки',
      },
      {
        title: '+30',
        description: 'Критериев для оценки персонала и аналитики',
      },
    ],
    additional: {
      indicators: [
        {
          title: {
            value: '+10',
          },
          description: 'Чеков в день и снижение текучки персонала',
        },
        {
          title: {
            value: '-48%',
          },
          description: 'Жалоб на качество обсулживания',
        },
      ],
    },
  },
  {
    sphere: {
      value: 'Сфера: банк',
      color: 'slate',
    },
    description:
      'Увеличили процент анализируемых звонков и оптимизировали отдел контроля качества',
    indicators: [
      {
        title: '98%',
        description: 'Контроль коммуникаций в колл-центре',
      },
      {
        title: '-43%',
        description: 'Снижение ФОТ на отдел контроля качества',
      },
    ],
    additional: {
      largeIndicator: {
        title: {
          value: '1 час',
          crossed: '1 день',
        },
        description: 'Скорость подготовки отчётов',
      },
    },
  },
  {
    sphere: {
      value: 'Сфера: интернет-магазин техники',
      color: 'green',
    },
    description:
      'Снизили расходы на рекламу с 5 000$ до 4 140$ в месяц без уменьшения количества лидов',
    indicators: [
      {
        title: '80%',
        description: 'Качественных обращений',
      },
      {
        title: '860$/мес',
        description: 'Экономия рекламного бюджета',
      },
    ],
    additional: {
      disclaimerIndicator: {
        title: '100%',
        description: 'Звонков автоматически прослушали за последние полгода',
        disclaimer: {
          value: 'Выявили рекламный канал,',
          bold: 'который действительно давал нецелевые заявки',
        },
      },
    },
  },
]
