import { Spin } from 'antd'
import CardItem from './CardItem'

const Cards = (props) => {
  const gap = {
    2: 'gap-2',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
  }
  const pageWidth = {
    800: 'w-[800px]',
    'auto': 'w-auto',
  }

  if(props.loading)
    return (
        <Spin spinning fullscreen/>
    )
  else {
    return (
      <div className={`${pageWidth[props.pageWidth]} p-4 grid grid-cols-3 ${gap[props.gap]}`}>
      {
        props.products.map((item, ind) => (
          <CardItem key={ind} {...item} width={props.width} height={props.height} />
        ))
      }
      </div>
    )
  }
}

export default Cards