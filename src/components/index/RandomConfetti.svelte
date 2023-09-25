<script>
    import Confetti from "./Confetti.svelte";
    const colors = ["#FF718D", "#FDFF6A", "#A864FD", "#7FCDF9", "#78FF44"]
    let confettis = GenerateConfetti(15);

    function GenerateConfetti(length) {
        let c = [];
        for (let i = 0; i < length; i++) {
            c.push(OneConfetti());
        }
        return c;
    }

    function OneConfetti() {
        let c = {};
        c.rotation = RandomInteger(360);
        c.left = RandomInteger(100);
        c.top = RandomInteger(80);
        c.color = colors[RandomInteger(colors.length-1)];
        return c;
    }

    function RandomInteger(range) {
        return Math.floor(Math.random() * (range - 0 + 1));
    }
</script>

<div class="w-full aspect-[10/3] relative">
    {#each confettis as confetti}
        <Confetti {confetti} />
    {/each}
</div>
