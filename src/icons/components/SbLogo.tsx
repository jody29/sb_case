import { chakra } from "@chakra-ui/react";
import { forwardRef, SVGProps } from "react";
interface CustomIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}
const SVGIcon = forwardRef<SVGSVGElement, CustomIconProps>(
  ({ size, ...props }, svgRef) => {
    if (size) {
      props.width = size;
      props.height = size;
    }
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={240}
        height={57}
        viewBox="0 0 240 57"
        ref={svgRef}
        {...props}
      >
        <path d="M85.0303 32.94C85.0303 33.94 84.7803 34.83 84.2703 35.63C83.7603 36.42 83.0204 37.05 82.0404 37.5C81.0604 37.95 79.9004 38.17 78.5704 38.17C76.9604 38.17 75.6403 37.86 74.6003 37.25C73.8603 36.81 73.2604 36.22 72.8004 35.48C72.3404 34.74 72.1104 34.02 72.1104 33.33C72.1104 32.92 72.2503 32.58 72.5303 32.29C72.8103 32 73.1603 31.86 73.5903 31.86C73.9403 31.86 74.2304 31.97 74.4704 32.2C74.7104 32.42 74.9203 32.76 75.0903 33.2C75.3003 33.72 75.5204 34.16 75.7604 34.52C76.0004 34.87 76.3403 35.16 76.7803 35.39C77.2203 35.62 77.7904 35.73 78.5004 35.73C79.4804 35.73 80.2703 35.5 80.8803 35.04C81.4903 34.58 81.8004 34 81.8004 33.31C81.8004 32.76 81.6403 32.32 81.3103 31.98C80.9803 31.64 80.5603 31.38 80.0303 31.2C79.5103 31.02 78.8104 30.83 77.9404 30.63C76.7704 30.35 75.7904 30.03 75.0004 29.66C74.2104 29.29 73.5904 28.78 73.1204 28.14C72.6604 27.5 72.4304 26.7 72.4304 25.75C72.4304 24.8 72.6704 24.04 73.1604 23.33C73.6504 22.63 74.3603 22.08 75.2803 21.7C76.2003 21.32 77.2904 21.13 78.5404 21.13C79.5404 21.13 80.4003 21.26 81.1303 21.51C81.8603 21.76 82.4603 22.09 82.9503 22.51C83.4303 22.93 83.7804 23.36 84.0004 23.82C84.2204 24.28 84.3304 24.72 84.3304 25.16C84.3304 25.56 84.1904 25.92 83.9104 26.23C83.6304 26.55 83.2904 26.71 82.8704 26.71C82.4904 26.71 82.2104 26.61 82.0104 26.42C81.8104 26.23 81.6004 25.92 81.3704 25.48C81.0704 24.86 80.7204 24.37 80.3004 24.02C79.8904 23.67 79.2204 23.5 78.3004 23.5C77.4504 23.5 76.7603 23.69 76.2403 24.07C75.7203 24.45 75.4604 24.9 75.4604 25.44C75.4604 25.77 75.5504 26.06 75.7304 26.3C75.9104 26.54 76.1504 26.75 76.4604 26.92C76.7704 27.09 77.0904 27.23 77.4004 27.33C77.7204 27.43 78.2404 27.57 78.9804 27.76C79.9004 27.98 80.7304 28.22 81.4704 28.48C82.2104 28.74 82.8504 29.06 83.3704 29.44C83.8904 29.82 84.3003 30.29 84.5903 30.86C84.8803 31.43 85.0303 32.14 85.0303 32.97V32.94Z" fill="white"/>
<path d="M98.9704 31.93C98.9704 32.84 98.8304 33.69 98.5504 34.46C98.2704 35.23 97.8604 35.9 97.3304 36.45C96.8004 37 96.1604 37.43 95.4204 37.73C94.6804 38.03 93.8504 38.17 92.9204 38.17C91.9904 38.17 91.1804 38.02 90.4404 37.72C89.7004 37.42 89.0704 36.99 88.5404 36.43C88.0004 35.87 87.6004 35.21 87.3204 34.45C87.0404 33.69 86.9004 32.85 86.9004 31.92C86.9004 30.99 87.0404 30.14 87.3204 29.37C87.6004 28.6 88.0004 27.94 88.5304 27.39C89.0604 26.84 89.6904 26.42 90.4404 26.12C91.1904 25.82 92.0104 25.68 92.9204 25.68C93.8304 25.68 94.6704 25.83 95.4204 26.13C96.1704 26.43 96.8104 26.86 97.3404 27.41C97.8704 27.96 98.2804 28.63 98.5604 29.39C98.8404 30.15 98.9804 31 98.9804 31.92L98.9704 31.93ZM95.9304 31.93C95.9304 30.68 95.6604 29.7 95.1104 29.01C94.5704 28.31 93.8304 27.96 92.9204 27.96C92.3304 27.96 91.8104 28.12 91.3504 28.43C90.9004 28.74 90.5504 29.2 90.3104 29.81C90.0704 30.42 89.9404 31.13 89.9404 31.94C89.9404 32.75 90.0604 33.44 90.3004 34.04C90.5404 34.64 90.8804 35.1 91.3304 35.42C91.7804 35.74 92.3004 35.9 92.9104 35.9C93.8304 35.9 94.5604 35.55 95.1004 34.85C95.6404 34.15 95.9204 33.18 95.9204 31.94L95.9304 31.93Z" fill="white"/>
<path d="M112.221 34.37C112.221 34.75 112.111 35.16 111.881 35.6C111.651 36.04 111.311 36.45 110.851 36.84C110.391 37.23 109.801 37.55 109.101 37.79C108.401 38.03 107.611 38.15 106.721 38.15C104.851 38.15 103.391 37.6 102.341 36.49C101.291 35.38 100.761 33.9 100.761 32.04C100.761 30.78 101.001 29.67 101.481 28.7C101.961 27.73 102.661 26.98 103.571 26.46C104.481 25.93 105.571 25.67 106.831 25.67C107.611 25.67 108.331 25.79 108.991 26.02C109.651 26.25 110.201 26.55 110.661 26.92C111.121 27.29 111.461 27.68 111.701 28.1C111.941 28.52 112.061 28.9 112.061 29.26C112.061 29.62 111.931 29.94 111.651 30.19C111.381 30.44 111.051 30.57 110.671 30.57C110.421 30.57 110.211 30.5 110.041 30.37C109.871 30.24 109.691 30.03 109.481 29.73C109.111 29.16 108.721 28.73 108.321 28.45C107.921 28.17 107.401 28.02 106.781 28.02C105.881 28.02 105.161 28.37 104.621 29.08C104.071 29.79 103.801 30.76 103.801 31.99C103.801 32.57 103.871 33.1 104.011 33.58C104.151 34.06 104.351 34.48 104.621 34.82C104.891 35.16 105.211 35.42 105.591 35.6C105.971 35.78 106.381 35.86 106.831 35.86C107.441 35.86 107.961 35.72 108.391 35.43C108.821 35.15 109.211 34.71 109.541 34.13C109.721 33.79 109.921 33.51 110.141 33.32C110.351 33.12 110.621 33.03 110.931 33.03C111.301 33.03 111.611 33.17 111.851 33.46C112.091 33.74 112.221 34.05 112.221 34.37Z" fill="white"/>
<path d="M116.4 24.26C115.98 24.26 115.62 24.13 115.32 23.87C115.02 23.61 114.87 23.24 114.87 22.76C114.87 22.32 115.02 21.97 115.33 21.69C115.64 21.41 115.99 21.27 116.4 21.27C116.81 21.27 117.14 21.4 117.44 21.65C117.74 21.9 117.9 22.28 117.9 22.76C117.9 23.24 117.75 23.6 117.46 23.87C117.17 24.14 116.81 24.27 116.41 24.27L116.4 24.26ZM117.9 27.43V36.3C117.9 36.92 117.76 37.38 117.47 37.7C117.18 38.01 116.81 38.17 116.37 38.17C115.93 38.17 115.57 38.01 115.29 37.69C115.01 37.37 114.87 36.91 114.87 36.31V27.52C114.87 26.91 115.01 26.46 115.29 26.15C115.57 25.84 115.93 25.69 116.37 25.69C116.81 25.69 117.18 25.84 117.47 26.15C117.76 26.46 117.9 26.89 117.9 27.43Z" fill="white"/>
<path d="M128.69 36.44C127.96 37.02 127.25 37.45 126.56 37.74C125.88 38.03 125.11 38.17 124.26 38.17C123.48 38.17 122.8 38.01 122.21 37.7C121.62 37.39 121.17 36.97 120.85 36.43C120.53 35.89 120.37 35.32 120.37 34.7C120.37 33.86 120.63 33.14 121.16 32.55C121.69 31.96 122.41 31.56 123.32 31.36C123.51 31.32 123.99 31.21 124.75 31.06C125.51 30.9 126.17 30.76 126.71 30.63C127.25 30.5 127.84 30.34 128.48 30.15C128.44 29.34 128.28 28.75 128 28.37C127.72 27.99 127.13 27.8 126.23 27.8C125.46 27.8 124.88 27.91 124.49 28.13C124.1 28.35 123.77 28.67 123.49 29.11C123.21 29.55 123.02 29.83 122.9 29.97C122.79 30.11 122.54 30.18 122.16 30.18C121.82 30.18 121.53 30.07 121.28 29.85C121.03 29.63 120.91 29.35 120.91 29C120.91 28.46 121.1 27.94 121.48 27.43C121.86 26.92 122.45 26.5 123.25 26.17C124.05 25.84 125.04 25.68 126.24 25.68C127.57 25.68 128.62 25.84 129.38 26.16C130.14 26.48 130.68 26.98 131 27.67C131.31 28.36 131.47 29.27 131.47 30.41C131.47 31.13 131.47 31.74 131.47 32.24C131.47 32.74 131.47 33.3 131.45 33.92C131.45 34.5 131.54 35.1 131.73 35.72C131.92 36.35 132.01 36.75 132.01 36.93C132.01 37.24 131.86 37.53 131.57 37.79C131.28 38.05 130.95 38.18 130.58 38.18C130.27 38.18 129.96 38.03 129.66 37.74C129.36 37.45 129.03 37.02 128.69 36.45V36.44ZM128.49 32C128.05 32.17 127.4 32.34 126.55 32.52C125.7 32.7 125.12 32.84 124.79 32.93C124.46 33.02 124.15 33.18 123.86 33.44C123.56 33.69 123.42 34.04 123.42 34.49C123.42 34.94 123.59 35.35 123.94 35.68C124.29 36.01 124.74 36.17 125.31 36.17C125.91 36.17 126.46 36.04 126.97 35.77C127.48 35.5 127.85 35.16 128.09 34.74C128.36 34.28 128.5 33.51 128.5 32.45V32.01L128.49 32Z" fill="white"/>
<path d="M134.54 36.3V22.98C134.54 22.36 134.67 21.9 134.94 21.59C135.21 21.27 135.58 21.12 136.03 21.12C136.48 21.12 136.86 21.28 137.14 21.59C137.42 21.9 137.56 22.37 137.56 22.99V36.31C137.56 36.93 137.42 37.4 137.13 37.71C136.85 38.02 136.48 38.18 136.03 38.18C135.58 38.18 135.23 38.02 134.95 37.7C134.67 37.38 134.53 36.92 134.53 36.32L134.54 36.3Z" fill="white"/>
<path d="M153.54 37.89H148.57C147.85 37.89 147.34 37.73 147.03 37.4C146.72 37.07 146.57 36.55 146.57 35.84V23.44C146.57 22.71 146.73 22.19 147.04 21.87C147.35 21.55 147.86 21.39 148.57 21.39H153.84C154.62 21.39 155.29 21.44 155.86 21.54C156.43 21.64 156.94 21.82 157.39 22.1C157.78 22.33 158.12 22.63 158.41 22.98C158.7 23.33 158.93 23.73 159.09 24.16C159.25 24.59 159.32 25.05 159.32 25.53C159.32 27.18 158.51 28.39 156.88 29.15C159.02 29.84 160.09 31.18 160.09 33.18C160.09 34.1 159.86 34.93 159.39 35.67C158.92 36.41 158.29 36.95 157.5 37.31C157 37.52 156.43 37.67 155.79 37.75C155.15 37.84 154.4 37.88 153.54 37.88V37.89ZM149.87 23.91V28.17H152.89C153.71 28.17 154.35 28.09 154.79 27.93C155.24 27.77 155.58 27.47 155.82 27.03C156 26.72 156.1 26.36 156.1 25.97C156.1 25.14 155.81 24.58 155.22 24.31C154.64 24.04 153.74 23.9 152.54 23.9H149.86L149.87 23.91ZM153.3 30.57H149.87V35.38H153.41C155.64 35.38 156.75 34.57 156.75 32.94C156.75 32.11 156.46 31.5 155.88 31.13C155.3 30.75 154.44 30.57 153.29 30.57H153.3Z" fill="#E95E30"/>
<path d="M165.74 33.74V36.3C165.74 36.92 165.6 37.39 165.31 37.7C165.02 38.01 164.65 38.17 164.21 38.17C163.77 38.17 163.41 38.01 163.13 37.7C162.85 37.39 162.71 36.92 162.71 36.31V27.76C162.71 26.38 163.2 25.69 164.19 25.69C164.69 25.69 165.06 25.85 165.28 26.17C165.5 26.49 165.62 26.97 165.65 27.6C166.01 26.97 166.38 26.49 166.77 26.17C167.15 25.85 167.66 25.69 168.3 25.69C168.94 25.69 169.55 25.85 170.15 26.17C170.75 26.49 171.05 26.92 171.05 27.45C171.05 27.83 170.92 28.13 170.67 28.38C170.41 28.62 170.14 28.75 169.84 28.75C169.73 28.75 169.46 28.68 169.03 28.54C168.6 28.4 168.23 28.33 167.9 28.33C167.46 28.33 167.09 28.45 166.81 28.68C166.53 28.92 166.31 29.27 166.15 29.73C165.99 30.19 165.89 30.75 165.83 31.39C165.77 32.03 165.74 32.81 165.74 33.74Z" fill="#E95E30"/>
<path d="M183.171 31.93C183.171 32.84 183.031 33.69 182.751 34.46C182.471 35.23 182.061 35.9 181.531 36.45C181.001 37 180.361 37.43 179.621 37.73C178.881 38.03 178.051 38.17 177.121 38.17C176.191 38.17 175.381 38.02 174.641 37.72C173.911 37.42 173.271 36.99 172.741 36.43C172.201 35.87 171.801 35.21 171.521 34.45C171.241 33.69 171.101 32.85 171.101 31.92C171.101 30.99 171.241 30.14 171.521 29.37C171.801 28.6 172.201 27.94 172.731 27.39C173.251 26.84 173.891 26.42 174.641 26.12C175.391 25.82 176.211 25.68 177.121 25.68C178.031 25.68 178.871 25.83 179.621 26.13C180.371 26.43 181.011 26.86 181.541 27.41C182.071 27.96 182.481 28.63 182.761 29.39C183.041 30.15 183.181 31 183.181 31.92L183.171 31.93ZM180.131 31.93C180.131 30.68 179.861 29.7 179.311 29.01C178.771 28.31 178.041 27.96 177.121 27.96C176.531 27.96 176.011 28.12 175.551 28.43C175.101 28.74 174.751 29.2 174.511 29.81C174.271 30.42 174.141 31.13 174.141 31.94C174.141 32.75 174.261 33.44 174.501 34.04C174.741 34.64 175.081 35.1 175.531 35.42C175.981 35.74 176.501 35.9 177.111 35.9C178.031 35.9 178.761 35.55 179.301 34.85C179.841 34.15 180.121 33.18 180.121 31.94L180.131 31.93Z" fill="#E95E30"/>
<path d="M185.721 25.95H186.051V24.11C186.051 23.62 186.061 23.23 186.091 22.95C186.121 22.67 186.191 22.43 186.311 22.22C186.431 22.01 186.601 21.84 186.821 21.71C187.041 21.58 187.291 21.51 187.561 21.51C187.941 21.51 188.291 21.66 188.601 21.95C188.811 22.15 188.941 22.38 188.991 22.66C189.051 22.94 189.071 23.34 189.071 23.86V25.95H190.181C190.611 25.95 190.941 26.05 191.161 26.26C191.391 26.47 191.501 26.73 191.501 27.05C191.501 27.46 191.341 27.75 191.021 27.92C190.701 28.09 190.241 28.17 189.641 28.17H189.071V33.82C189.071 34.3 189.091 34.67 189.121 34.93C189.151 35.19 189.241 35.4 189.391 35.56C189.531 35.72 189.771 35.8 190.101 35.8C190.281 35.8 190.521 35.77 190.821 35.7C191.121 35.64 191.361 35.6 191.531 35.6C191.771 35.6 191.991 35.7 192.191 35.9C192.391 36.1 192.481 36.34 192.481 36.64C192.481 37.13 192.211 37.51 191.681 37.78C191.151 38.04 190.381 38.17 189.381 38.17C188.381 38.17 187.711 38.01 187.231 37.69C186.751 37.37 186.421 36.92 186.271 36.35C186.121 35.78 186.041 35.02 186.041 34.07V28.18H185.641C185.201 28.18 184.871 28.08 184.641 27.87C184.411 27.66 184.301 27.39 184.301 27.07C184.301 26.75 184.421 26.48 184.661 26.28C184.901 26.07 185.251 25.97 185.711 25.97L185.721 25.95Z" fill="#E95E30"/>
<path d="M196.57 22.98V27.54C196.95 27.09 197.33 26.73 197.7 26.47C198.07 26.21 198.47 26.01 198.92 25.88C199.37 25.75 199.84 25.68 200.35 25.68C201.12 25.68 201.8 25.85 202.4 26.17C202.99 26.5 203.46 26.98 203.8 27.61C204.01 27.98 204.16 28.39 204.23 28.84C204.3 29.29 204.34 29.82 204.34 30.41V36.29C204.34 36.91 204.2 37.37 203.92 37.69C203.64 38 203.27 38.16 202.82 38.16C201.82 38.16 201.32 37.54 201.32 36.29V31.1C201.32 30.12 201.18 29.36 200.89 28.83C200.6 28.3 200.05 28.04 199.25 28.04C198.71 28.04 198.22 28.2 197.79 28.51C197.36 28.82 197.03 29.25 196.82 29.79C196.66 30.25 196.58 31.06 196.58 32.23V36.29C196.58 36.9 196.44 37.36 196.17 37.68C195.9 38 195.52 38.16 195.04 38.16C194.04 38.16 193.54 37.54 193.54 36.29V22.97C193.54 22.35 193.67 21.88 193.93 21.57C194.19 21.26 194.56 21.1 195.03 21.1C195.5 21.1 195.89 21.26 196.16 21.57C196.43 21.88 196.57 22.35 196.57 22.96V22.98Z" fill="#E95E30"/>
<path d="M215.8 32.68H209.87C209.87 33.38 210.02 33.99 210.29 34.52C210.56 35.05 210.92 35.45 211.37 35.72C211.82 35.99 212.31 36.13 212.85 36.13C213.21 36.13 213.54 36.09 213.84 36C214.14 35.91 214.43 35.78 214.71 35.59C214.99 35.41 215.25 35.21 215.49 35C215.73 34.79 216.03 34.51 216.41 34.14C216.57 34 216.79 33.94 217.08 33.94C217.39 33.94 217.64 34.03 217.83 34.2C218.02 34.37 218.12 34.62 218.12 34.93C218.12 35.21 218.01 35.53 217.8 35.9C217.59 36.27 217.26 36.63 216.83 36.97C216.4 37.31 215.85 37.59 215.2 37.82C214.54 38.04 213.79 38.16 212.94 38.16C210.99 38.16 209.48 37.6 208.4 36.47C207.32 35.34 206.78 33.82 206.78 31.89C206.78 30.98 206.91 30.14 207.18 29.36C207.45 28.58 207.84 27.92 208.35 27.36C208.86 26.81 209.49 26.38 210.24 26.08C210.99 25.78 211.82 25.64 212.73 25.64C213.91 25.64 214.93 25.89 215.78 26.4C216.63 26.91 217.26 27.56 217.68 28.36C218.1 29.16 218.31 29.98 218.31 30.81C218.31 31.58 218.09 32.08 217.65 32.31C217.21 32.54 216.6 32.65 215.81 32.65L215.8 32.68ZM209.87 30.94H215.37C215.3 29.89 215.02 29.1 214.53 28.58C214.05 28.06 213.41 27.8 212.61 27.8C211.81 27.8 211.24 28.06 210.75 28.59C210.27 29.12 209.97 29.9 209.87 30.94Z" fill="#E95E30"/>
<path d="M223.86 33.74V36.3C223.86 36.92 223.72 37.39 223.43 37.7C223.14 38.01 222.77 38.17 222.33 38.17C221.89 38.17 221.53 38.01 221.25 37.7C220.97 37.39 220.83 36.92 220.83 36.31V27.76C220.83 26.38 221.32 25.69 222.31 25.69C222.81 25.69 223.18 25.85 223.4 26.17C223.62 26.49 223.74 26.97 223.77 27.6C224.13 26.97 224.5 26.49 224.89 26.17C225.27 25.85 225.78 25.69 226.42 25.69C227.06 25.69 227.67 25.85 228.27 26.17C228.87 26.49 229.17 26.92 229.17 27.45C229.17 27.83 229.04 28.13 228.79 28.38C228.53 28.62 228.26 28.75 227.96 28.75C227.85 28.75 227.58 28.68 227.15 28.54C226.72 28.4 226.35 28.33 226.02 28.33C225.58 28.33 225.21 28.45 224.93 28.68C224.65 28.92 224.43 29.27 224.27 29.73C224.11 30.19 224.01 30.75 223.95 31.39C223.89 32.03 223.86 32.81 223.86 33.74Z" fill="#E95E30"/>
<path d="M240 34.15C240 35 239.8 35.72 239.39 36.33C238.98 36.94 238.38 37.39 237.59 37.7C236.79 38.01 235.83 38.17 234.69 38.17C233.55 38.17 232.67 38 231.89 37.66C231.11 37.32 230.54 36.9 230.17 36.39C229.8 35.88 229.61 35.38 229.61 34.87C229.61 34.53 229.73 34.24 229.97 34C230.21 33.76 230.51 33.64 230.87 33.64C231.19 33.64 231.43 33.72 231.6 33.88C231.77 34.04 231.93 34.26 232.09 34.54C232.4 35.09 232.77 35.5 233.21 35.77C233.64 36.04 234.23 36.18 234.98 36.18C235.59 36.18 236.08 36.04 236.47 35.77C236.86 35.5 237.05 35.18 237.05 34.83C237.05 34.29 236.85 33.9 236.45 33.65C236.05 33.4 235.38 33.17 234.46 32.94C233.42 32.68 232.57 32.4 231.91 32.11C231.25 31.82 230.73 31.44 230.34 30.97C229.95 30.5 229.75 29.92 229.75 29.23C229.75 28.61 229.93 28.03 230.29 27.49C230.65 26.94 231.19 26.51 231.89 26.18C232.6 25.85 233.45 25.69 234.45 25.69C235.23 25.69 235.94 25.77 236.56 25.94C237.19 26.11 237.71 26.33 238.13 26.6C238.55 26.88 238.87 27.18 239.08 27.52C239.3 27.86 239.41 28.19 239.41 28.51C239.41 28.86 239.29 29.15 239.06 29.38C238.83 29.6 238.5 29.72 238.07 29.72C237.76 29.72 237.49 29.63 237.28 29.45C237.06 29.27 236.81 29 236.53 28.64C236.3 28.34 236.03 28.1 235.72 27.92C235.41 27.74 234.99 27.65 234.45 27.65C233.91 27.65 233.45 27.77 233.08 28C232.72 28.24 232.54 28.53 232.54 28.88C232.54 29.2 232.67 29.47 232.94 29.67C233.21 29.87 233.57 30.05 234.02 30.18C234.47 30.32 235.09 30.48 235.89 30.67C236.83 30.9 237.6 31.18 238.19 31.5C238.79 31.82 239.24 32.2 239.54 32.64C239.85 33.08 240 33.58 240 34.14V34.15Z" fill="#E95E30"/>
<path d="M61.97 20.08C59.75 16.48 56.7 14.52 52.01 13.54C51.97 9.94999 50.88 7.80999 49.79 5.98999C46.05 -0.220012 37.87 -1.56001 32.48 1.76999L21 9.06999L7.26999 17.74L7.19999 17.62L7.25999 17.72C1.34999 21.44 -2.57001 28.78 1.98999 36.48C5.41999 42.2 13.59 45.45 20.3 41.15C22.25 39.92 24.8 39.69 26.52 42.55C28 44.9 26.88 47.51 24.44 48.79L29.44 57C35.82 53.11 39.18 44.94 34.77 37.6C30.42 30.36 21.54 29.66 16.18 33.11C14.23 34.34 11.16 33.72 9.92999 31.67C8.34999 28.92 9.64999 26.72 11.79 25.37V25.35L25.4 16.75L36.38 9.97999C41.69 6.62999 46.44 13.9 40.87 17.35L38.1 19.16L42.63 26.7L47.55 23.66C52.44 20.57 57.1 27.7 51.87 31.07L38.97 39.21L43.73 47.13L58.08 38.2C61.94 35.76 66.34 27.26 61.96 20.08H61.97Z" fill="#E95E30"/>
      </svg>
    );
  }
);
const SbLogoIcon = chakra(SVGIcon);
export default SbLogoIcon;