 import '../Astyles/Atoogle.css'

 const ToggleButton = ({isToggled, onToggle}) => {
    return(
        <>    
        <label for="theme" class="theme">
        <span class="theme__toggle-wrap">
        <input id="theme"
         class="theme__toggle"
         type="checkbox"
         role="switch"
         name="theme"
         value="dark"
         checked={isToggled} 
         onChange={onToggle} />
         
     	<span class="theme__fill"></span>
		<span class="theme__icon">
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
		</span>
        </span>
        </label>
        </>
    )
  }

  export default ToggleButton