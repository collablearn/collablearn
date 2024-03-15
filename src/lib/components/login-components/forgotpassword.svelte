<script lang="ts">
	import reset_pass_icon from '$lib/assets/reset_pass_icon.svg';
	import close_icon from '$lib/assets/close_icon.svg';
	import { scale } from 'svelte/transition';
	import { loginComponent } from '$lib';
</script>

<div
	class="fixed left-0 right-0 bottom-0 top-0 flex flex-col justify-center items-center bg-[#00000050]"
>
	<div
		class="h-[739px] w-[826px] bg-submain relative flex flex-col items-center px-[102px] shadow-lg shadow-black"
		in:scale
	>
		<button
			class="absolute top-0 right-0 mr-[38px] mt-[28px]"
			on:click={() => ($loginComponent.showForgotPass = false)}
		>
			<img src={close_icon} alt="close-icon" class="" />
		</button>

		<div class="mt-[72px]">
			<img src={reset_pass_icon} alt="reset-pass-icon" class="" />
		</div>

		<div class="mt-[50px]">
			<span class="text-main font-semibold text-[24px]"
				>Enter the email address associated with your account and we’ll send you a link to reset
				your password.</span
			>
		</div>

		<div class="flex flex-col gap-[23px] w-full mt-[42px]">
			<div class="">
				<label for="email" class="text-[22px] text-main">Email Address</label>
				<input
					id="email"
					type="email"
					class="h-[62px] w-full rounded-lg bg-submain border-[2px] border-main text-[20px] text-main outline-none px-[25px]"
					placeholder=""
				/>
			</div>

			<button class="font-bold text-white flex justify-center w-full bg-main py-[19px] rounded-lg"
				>CONTINUE</button
			>
		</div>

		<div class="flex items-center gap-[8px] mt-[86px]">
			<span class="font-light text-[20px] text-main">Don't have an account?</span>
			<button
				class="font-medium text-[20px] text-main underline"
				on:click={() => {
					$loginComponent.showForgotPass = false;
					$loginComponent.showCreateAccount = true;
				}}>Sign up</button
			>
		</div>
	</div>
</div>

<style>
	::-ms-input-placeholder {
		/* Edge 12-18 */
		color: #800000;
	}

	::placeholder {
		color: #800000;
	}
</style>
