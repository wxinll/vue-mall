let mixin = {
	filters: {
		formatPrice(value){
			let arr = (value + '').split('')
			if(arr.indexOf('.')>-1){
				let index = arr.indexOf('.')
				arr = arr.slice(0,index + 2)
				arr.push('0')
			}else{
				arr.push('.00')
			}
			return arr.join('')
		}
	}
}

export default mixin