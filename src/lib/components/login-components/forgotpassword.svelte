<script lang="ts">
	import reset_pass_icon from '$lib/assets/reset_pass_icon.svg';
	import close_icon from '$lib/assets/close_icon.svg';
	import { fade, scale } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { ResultModel } from '$lib/types';
	import Loader from '../general-components/loader.svelte';

	export let showForgotPasswordModal = false;

	type ResetPassVal = {
		email: string[];
	};

	let formActionErrors: ResetPassVal | null = null;
	let resetPassLoader = false;
	let dbMessage = '';

	const resetPassActionNews: SubmitFunction = () => {
		resetPassLoader = true;
		return async ({ result, update }) => {
			const {
				status,
				data: { msg, errors }
			} = result as ResultModel<{ msg: string; errors: ResetPassVal }>;

			switch (status) {
				case 200:
					formActionErrors = null;
					dbMessage = msg;
					resetPassLoader = false;
					break;

				case 400:
					formActionErrors = errors;
					resetPassLoader = false;
					break;

				case 401:
					formActionErrors = null;
					dbMessage = msg;
					resetPassLoader = false;
					break;
			}
			await update();
		};
	};
</script>

{#if showForgotPasswordModal}
	<div
		class="fixed left-0 right-0 bottom-0 top-0 flex flex-col justify-center items-center bg-[#00000050]"
	>
		<div
			class="h-[739px] w-[826px] bg-submain relative flex flex-col items-center px-[102px] shadow-lg shadow-black"
			in:scale
		>
			<button
				class="absolute top-0 right-0 mr-[38px] mt-[28px]"
				on:click={() => (showForgotPasswordModal = false)}
			>
				<img src={close_icon} alt="close-icon" class="" />
			</button>

			<div class="mt-[72px]">
				<img src={reset_pass_icon} alt="reset-pass-icon" class="" />
			</div>

			<div class="mt-[50px]">
				<p class="text-main font-semibold text-[24px] text-center">
					Enter the email address associated with your account and we’ll send you a link to reset
					your password.
				</p>
			</div>

			<form
				method="post"
				action="?/resetPassAction"
				enctype="multipart/form-data"
				use:enhance={resetPassActionNews}
				class="flex flex-col gap-[23px] w-full mt-[21px]"
			>
				<div class="">
					<label for="email" class="text-[22px] text-main">Email Address</label>
					<input
						id="email"
						type="email"
						name="email"
						class="h-[62px] w-full rounded-lg bg-submain border-[2px] border-main text-[20px] text-main outline-none px-[25px]"
						placeholder=""
					/>
				</div>

				{#each formActionErrors?.email ?? [] as errorMsg}
					<span class="text-main" transition:fade>{errorMsg}</span>
				{/each}

				<button
					disabled={resetPassLoader}
					class="font-bold text-white flex justify-center w-full bg-main py-[19px] rounded-lg"
				>
					<Loader name="CONTINUE" loader={resetPassLoader} loaderName="SENDING LINK..." />
				</button>
			</form>

			<div class="flex items-center gap-[8px] mt-[86px]">
				<span class="font-light text-[20px] text-main">Don't have an account?</span>
				<button class="font-medium text-[20px] text-main underline" on:click>Sign up</button>
			</div>

			<div class="mx-auto mt-[20px]">
				<p class=" bg-main text-submain text-center" in:fade>{dbMessage}</p>
			</div>
		</div>
	</div>
{/if}

<style>
	::-ms-input-placeholder {
		/* Edge 12-18 */
		color: #800000;
	}

	::placeholder {
		color: #800000;
	}
</style>
