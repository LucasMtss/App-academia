const MENU = [
  {
    title: "Segunda - Peito",
    data: [
      {
        id: "1",
        title: "Supino reto",
        series: '3 séries',
        repetitions: '15 repetições',
        restTime: "Descanço de 30 segundos",
        comments: "Dicas do treino",
        videoUrl: "EZMYCLKuGow",
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
      },
      {
        id: "2",
        title: "Supino inclinado",
        series: '3 séries',
        repetitions: '15 repetições',
        restTime: "Descanço de 30 segundos",
        comments: "Dicas do treino",
        videoUrl: "EZMYCLKuGow",
       
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
      },
      {
        id: "3",
        title: "Crucifixo",
        series: '3 séries',
        repetitions: '15 repetições',
        restTime: "Descanço de 30 segundos",
        comments: "Dicas do treino",
        videoUrl: "EZMYCLKuGow",
       
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
      },
      {
        id: "4",
        title: "Cross over na polia alta",
        series: '3 séries',
        repetitions: '15 repetições',
        restTime: "Descanço de 30 segundos",
        comments: "Dicas do treino",
        videoUrl: "EZMYCLKuGow",
       
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
      },
      {
        id: "5",
        title: "Cross over na polia baixa",
        series: '3 séries',
        repetitions: '15 repetições',
        restTime: "Descanço de 30 segundos",
        comments: "Dicas do treino",
        videoUrl: "EZMYCLKuGow",
       
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
      },
    ],
  },
  {
    title: "Terça - Costas",
    data: [
      {
        id: "6",
        title: "Pulley alto de frente",
        series: '3 séries',
        repetitions: '15 repetições',
        restTime: "Descanço de 30 segundos",
        comments: "Dicas do treino",
        videoUrl: "EZMYCLKuGow",
       
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
      },
      {
        id: "7",
        title: "Pulley alto de fechado",
        series: '3 séries',
        repetitions: '15 repetições',
        restTime: "Descanço de 30 segundos",
        comments: "Dicas do treino",
        videoUrl: "EZMYCLKuGow",
       
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
      },
      {
        id: "8",
        title: "Remada baixa",
        series: '3 séries',
        repetitions: '15 repetições',
        restTime: "Descanço de 30 segundos",
        comments: "Dicas do treino",
        videoUrl: "EZMYCLKuGow",
       
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
      },
      {
        id: "9",
        title: "Voador invertido",
        series: '3 séries',
        repetitions: '15 repetições',
        restTime: "Descanço de 30 segundos",
        comments: "Dicas do treino",
        videoUrl: "EZMYCLKuGow",
       
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
      },
      {
        id: "10",
        title: "Remada cavalo",
        series: '3 séries',
        repetitions: '15 repetições',
        restTime: "Descanço de 30 segundos",
        comments: "Dicas do treino",
        videoUrl: "EZMYCLKuGow",
       
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
      },
    ],
  },
]

const EXERCISES = MENU.map((item) => item.data).flat()

const DAYS = MENU.map((item) => item.title)

type ExerciseProps = (typeof EXERCISES)[0]

type ItemExerciceListProps = (typeof MENU[0])

export { MENU, EXERCISES, DAYS, ExerciseProps, ItemExerciceListProps }
