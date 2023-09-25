<script>
    export let confetti;
</script>

<div
    class="border-8 border-t-[15px] w-0 h-0 absolute"
    style={`transform: rotate(${confetti.rotation}deg); top: ${confetti.top}%; left: ${confetti.left}%; border-color: ${confetti.color} transparent transparent transparent`}
/>
