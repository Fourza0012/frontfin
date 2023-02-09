import ReactLoading from 'react-loading';
 
type LoadingProp = {
    type: "blank" | "balls" | "bars" | "bubbles" | "cubes" | "cylon" | "spin" | "spinningBubbles" | "spokes",
    color: string,
    height?: number | string,
    width?: number | string
}

const LoadingComponent = ({ type, color, height, width }: LoadingProp) => (
    <ReactLoading type={type} color={color} height={height} width={width} />
)
 
export default LoadingComponent;