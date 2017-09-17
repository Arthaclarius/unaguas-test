import styles from '../../../assets/styles/UnaguasStyle'

export default [
  {
    type: 'H3',
    val: '¿Cómo Contactarnos?',
    style: styles.Subtitle
  },
  {
    type: 'List',
    val: [
      {
        type: 'View',
        val: [
          {
            type: 'Text',
            val: 'Correo Electrónico',
            style: styles.boldText
          },
          {
            type: 'Text',
            val: 'info@unaguas.org'
          }
        ]
      },
      {
        type: 'View',
        val: [
          {
            type: 'Text',
            val: 'Horario de Atención',
            style: styles.boldText
          },
          {
            type: 'Text',
            val: 'Lunea a Miércoles de 8:00am a 8:00pm'
          }
        ]
      },
      {
        type: 'View',
        val: [
          {
            type: 'Text',
            val: 'Telefax (506) 2495-2000',
            style: styles.boldText
          }
        ]
      },
      {
        type: 'View',
        val: [
          {
            type: 'Text',
            val: 'Nuestra Ubicación:',
            style: styles.boldText
          },
          {
            type: 'Text',
            val: 'Contiguo a Ferretería Tipsa en Santa Gertrudis Centro'
          }
        ]
      }
    ]
  }
]
