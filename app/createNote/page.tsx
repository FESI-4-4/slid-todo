import IconAddLink from '@/public/icons/IconAddLink';
import IconClose from '@/public/icons/IconClose';
import IconEmbed from '@/public/icons/IconEmbed';
import IconFlag from '@/public/icons/IconFlag';
import IconTextAlignLeft from '@/public/icons/IconTextAlignLeft';
import IconTextAlignMiddle from '@/public/icons/IconTextAlignMiddle';
import IconTextAlignRight from '@/public/icons/IconTextAlignRight';
import IconTextBold from '@/public/icons/IconTextBold';
import IconTextBulletPoint from '@/public/icons/IconTextBulletPoint';
import IconTextColor from '@/public/icons/IconTextColor';
import IconTextItalics from '@/public/icons/IconTextItalics';
import IconTextNumberPoint from '@/public/icons/IconTextNumberPoint';
import IconTextUnderline from '@/public/icons/IconTextUnderline';

export default function Page() {
  return (
    <main className="flex w-full">
      <section className="w-10 h-screen"></section> {/* 링크 임베드 */}
      <section className="max-w-[800px] w-full py-6 px-10 flex flex-col">
        <div className="flex w-full items-center mb-4">
          <h1 className="grow text-slate-900 font-semibold text-lg">노트 작성</h1>
          <button className="py-3 px-5 text-blue-500 font-semibold text-sm mr-2">임시저장</button>
          <button className="py-3 px-5 bg-blue-500 rounded-xl text-white font-semibold">작성 완료</button>
        </div>
        <div className="flex w-full gap-1.5 mb-3">
          <div className="flex justify-center items-center rounded-md bg-slate-800 w-6 h-6">
            <IconFlag />
          </div>
          <p className="font-medium text-base text-slate-800">목표</p>
        </div>
        <div className="flex w-full gap-2 mb-6">
          <p className="rounded-md bg-slate-100 p-1 text-slate-700 text-xs">To do</p>
          <p className="text-sm font-normal text-slate-700">할일</p>
        </div>
        <hr />
        <form className="grow w-full h-fit relative flex flex-col">
          <div className="w-full relative h-7 my-3">
            <input
              className="w-full text-lg font-medium focus-visible:outline-none"
              placeholder="노트의 제목을 입력해주세요"
            />
            <p className="absolute right-0 top-0 text-slate-800 font-medium text-xs">
              {22}/<span className="text-blue-500">30</span>
            </p>
          </div>
          <hr />
          <div className="w-full my-3">
            <p className="text-slate-800 text-xs font-medium">
              공백포함 : 총 {0}자 | 공백제외 : 총 {0}자
            </p>
          </div>
          <div className="w-full rounded-full bg-slate-200 p-1 flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-blue-500 flex justify-center items-center">
              <IconEmbed />
            </div>
            <p className="grow text-base font-normal text-slate-800">link</p>
            <div className="w-6 h-6 rounded-full flex justify-center items-center">
              <IconClose />
            </div>
          </div>
          <div className="grow">
            <textarea
              placeholder="이 곳을 클릭해 노트 작성을 시작해주세요"
              className="resize-none w-full h-full focus-visible:outline-none text-slate-700"
            />
          </div>
          <div className="w-full border border-slate-200 rounded-full py-2.5 px-4 absolute bottom-0 bg-white flex gap-4">
            <div className="flex gap-1">
              <IconTextBold className="cursor-pointer hover:bg-slate-100" />
              <IconTextItalics className="cursor-pointer hover:bg-slate-100" />
              <IconTextUnderline className="cursor-pointer hover:bg-slate-100" />
            </div>
            <div className="flex gap-1">
              <IconTextAlignLeft className="cursor-pointer hover:bg-slate-100" />
              <IconTextAlignMiddle className="cursor-pointer hover:bg-slate-100" />
              <IconTextAlignRight className="cursor-pointer hover:bg-slate-100" />
            </div>
            <div className="flex gap-1">
              <IconTextBulletPoint className="cursor-pointer hover:bg-slate-100" />
              <IconTextNumberPoint className="cursor-pointer hover:bg-slate-100" />
              <IconTextColor className="cursor-pointer hover:bg-slate-100" />
            </div>
            <div className="grow flex justify-end">
              <IconAddLink className="cursor-pointer hover:bg-slate-100" />
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
