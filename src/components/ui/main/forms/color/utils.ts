export function rgbaStringToHslaString(rgbaString: string): string {
   const rgbaRegex = /rgba?\((\d{1,3}), (\d{1,3}), (\d{1,3}),? ?(\d(?:\.\d{0,2})?)?\)/
   const match = rgbaString.match(rgbaRegex)
   
   if (!match) {
      return ''
   }
   
   let [_, rStr, gStr, bStr, aStr = '1'] = match
   const r = rStr ? parseInt(rStr, 10) / 255 : 0
   const g = gStr ? parseInt(gStr, 10) / 255 : 0
   const b = bStr ? parseInt(bStr, 10) / 255 : 0
   const a = parseFloat(aStr)
   
   const max = Math.max(r, g, b)
   const min = Math.min(r, g, b)
   const delta = max - min
   
   let h = 0
   let s = 0
   let l = (max + min) / 2
   
   if (delta !== 0) {
      s = delta / (1 - Math.abs(2 * l - 1))
      
      if (max === r) {
         h = ((g - b) / delta) % 6
      } else if (max === g) {
         h = (b - r) / delta + 2
      } else {
         h = (r - g) / delta + 4
      }
      
      h = h * 60
      if (h < 0) {
         h += 360
      }
      
      s = s * 100
      l = l * 100
   }
   
   return `hsla(${h.toFixed()}, ${s.toFixed()}%, ${l.toFixed()}%, ${a.toFixed(2)})`
}

export function hexToHslaString(hexString: string): string {
   const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
   const match = hexString.match(hexRegex)
   
   if (!match) {
      return ''
   }
   
   const [_, rStr, gStr, bStr] = match
   const r = rStr ? parseInt(rStr, 16) / 255 : 0
   const g = gStr ? parseInt(gStr, 16) / 255 : 0
   const b = bStr ? parseInt(bStr, 16) / 255 : 0
   
   const max = Math.max(r, g, b)
   const min = Math.min(r, g, b)
   const delta = max - min
   
   let h = 0
   let s = 0
   let l = (max + min) / 2
   
   if (delta !== 0) {
      s = delta / (1 - Math.abs(2 * l - 1))
      
      if (max === r) {
         h = ((g - b) / delta) % 6
      } else if (max === g) {
         h = (b - r) / delta + 2
      } else {
         h = (r - g) / delta + 4
      }
      
      h = h * 60
      if (h < 0) {
         h += 360
      }
      
      s = s * 100
      l = l * 100
   }
   
   return `hsla(${h.toFixed()}, ${s.toFixed()}%, ${l.toFixed()}%, 1)`
}

export function isValidCssColor(colorString: string): boolean {
   const hexRegex = /^#?([a-f\d]{3}|[a-f\d]{6})$/i
   const rgbaRegex = /rgba?\((\d{1,3}), (\d{1,3}), (\d{1,3}),? ?(\d(?:\.\d{0,2})?)?\)/
   
   if (hexRegex.test(colorString)) {
      return true
   } else if (rgbaRegex.test(colorString)) {
      return true
   }
   
   return false
}

export function rgbToHsl(rgbColor: string): string {
   // Check if the input is valid
   if (!rgbColor || typeof rgbColor !== 'string') {
      return 'hsl(0, 0%, 0%)'
   }
   
   // Extract the RGB values from the string
   const match = rgbColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
   if (!match || match.length < 4) {
      return 'hsl(0, 0%, 0%)'
   }
   
   const r = parseInt(match[1]!, 10)
   const g = parseInt(match[2]!, 10)
   const b = parseInt(match[3]!, 10)
   
   // Convert RGB to HSL
   const max = Math.max(r, g, b)
   const min = Math.min(r, g, b)
   const diff = max - min
   let h = 0
   let s = 0
   const l = (max + min) / 2
   
   if (diff !== 0) {
      s = diff / (l > 0.5 ? 2 - max - min : max + min)
      switch (max) {
         case r:
            h = (g - b) / diff + (g < b ? 6 : 0)
            break
         case g:
            h = (b - r) / diff + 2
            break
         case b:
            h = (r - g) / diff + 4
            break
      }
      h /= 6
   }
   
   // Format and return the HSL string
   return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`
}
