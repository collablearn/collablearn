<script lang="ts">
	import { staticComponent } from '$lib';
	import check_icon from '$lib/assets/check_icon.svg';
	import { scale } from 'svelte/transition';
</script>

<div
	class="fixed left-0 right-0 bottom-0 top-0 flex flex-col justify-center items-center bg-[#00000050]"
>
	<div class="w-[613px] bg-submain min-h-[638px] px-[67px] flex flex-col items-center">
		<div class="mt-[85px]">
			<img src={check_icon} alt="check-icon" class="" />
		</div>

		<hr class="border-[1px] border-main mt-[75px] w-full" />

		<span class="text-main font-bold text-[34px] mt-[41px] text-center">Password Updated!</span>
		<span class="font-normal text-[20px] text-main text-center mt-[46px]"
			>Strong passwords are key to online safety! Next time, try making passwords at least 12
			characters long, with a mix of uppercase and lowercase letters, numbers, and symbols. Think
			unique - ditch birthdays and pet names! Consider a password manager - it remembers them all
			securely for you. This way, online security gets a big boost!
		</span>

		<div class="my-[67px]">
			<button
				class="w-[218px] py-[15.5px] flex justify-center items-center bg-main text-white text-[20px] font-bold rounded-[26px]"
				on:click={() => {
					$staticComponent.showUpdatePassUI = false;
					$staticComponent.showResetCodeUI = false;
					$staticComponent.showSuccessUpdatePassModal = false;
					$staticComponent.showForgotPassword = false;
				}}
				>Got it!
			</button>
		</div>
	</div>
</div>
