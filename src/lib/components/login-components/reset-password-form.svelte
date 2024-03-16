<script lang="ts">
	import { enhance } from '$app/forms';
	import Loader from '../general-components/loader.svelte';
</script>

<form
	method="post"
	action="?/updatePasswordAction"
	enctype="multipart/form-data"
	use:enhance
	class="flex flex-col gap-[23px] w-full mt-[21px]"
>
	<div class="">
		<label for="passwordResetCode" class="text-[22px] text-main">Password Reset Code</label>
		<input
			id="passwordResetCode"
			type="text"
			name="passwordResetCode"
			class="h-[62px] w-full rounded-lg bg-submain border-[2px] border-main text-[20px] text-main outline-none px-[25px]"
			placeholder=""
		/>
	</div>

	<!-- {#each formActionErrors?.email ?? [] as errorMsg}
		<span class="text-main" transition:fade>{errorMsg}</span>
	{/each} -->

	<button class="font-bold text-white flex justify-center w-full bg-main py-[19px] rounded-lg">
		<Loader name="CONTINUE" loaderName="SENDING LINK..." />
	</button>
</form>
