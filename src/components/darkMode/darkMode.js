import useAction from '../../hooks/useAction';
import './darkMode.scss';

const DarkMode = () => {
    const { setDarkMode } = useAction();

    const onNightMode = () => {
        setDarkMode()
    }

    return (
        <div className="tumbler-wrapper" onClick={onNightMode}>
            <div className="tumbler"></div>
            <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 60 60"
            xmlSpace="preserve"
            >
            <g>
                <path
                fill="#F0C419"
                d="M30,0c-0.552,0-1,0.448-1,1v6c0,0.552,0.448,1,1,1s1-0.448,1-1V1C31,0.448,30.552,0,30,0z"
                />
                <path
                fill="#F0C419"
                d="M30,52c-0.552,0-1,0.448-1,1v6c0,0.552,0.448,1,1,1s1-0.448,1-1v-6C31,52.448,30.552,52,30,52z"
                />
                <path
                fill="#F0C419"
                d="M59,29h-6c-0.552,0-1,0.448-1,1s0.448,1,1,1h6c0.552,0,1-0.448,1-1S59.552,29,59,29z"
                />
                <path
                fill="#F0C419"
                d="M8,30c0-0.552-0.448-1-1-1H1c-0.552,0-1,0.448-1,1s0.448,1,1,1h6C7.552,31,8,30.552,8,30z"
                />
            </g>
            <circle fill="#F0C419" cx="30" cy="30" r="20" />
            <circle fill="#EDE21B" cx="30" cy="30" r="15" />
            </svg>

            <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 499.712 499.712"
            xmlSpace="preserve"
            >
            <path
                fill="#FFD93B"
                d="M146.88,375.528c126.272,0,228.624-102.368,228.624-228.64c0-55.952-20.16-107.136-53.52-146.88 C425.056,33.096,499.696,129.64,499.696,243.704c0,141.392-114.608,256-256,256c-114.064,0-210.608-74.64-243.696-177.712 C39.744,355.368,90.944,375.528,146.88,375.528z"
            />
            <path
                fill="#F4C534"
                d="M401.92,42.776c34.24,43.504,54.816,98.272,54.816,157.952c0,141.392-114.608,256-256,256 c-59.68,0-114.448-20.576-157.952-54.816c46.848,59.472,119.344,97.792,200.928,97.792c141.392,0,256-114.608,256-256 C499.712,162.12,461.392,89.64,401.92,42.776z"
            />
            <g>
                <polygon
                fill="#FFD83B"
                points="128.128,99.944 154.496,153.4 213.472,161.96 170.8,203.56 180.864,262.296 
                    128.128,234.568 75.376,262.296 85.44,203.56 42.768,161.96 101.744,153.4"
                />
                <polygon
                fill="#FFD83B"
                points="276.864,82.84 290.528,110.552 321.104,114.984 298.976,136.552 304.208,166.984 
                    276.864,152.616 249.52,166.984 254.752,136.552 232.624,114.984 263.2,110.552"
                />
            </g>
            </svg>
        </div>
    )
}

export default DarkMode;