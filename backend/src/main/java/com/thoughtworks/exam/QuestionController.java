package com.thoughtworks.exam;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@CrossOrigin(value = "*")
public class QuestionController {

    private final String QUESTIONS = "{\n" +
            "  \"title\": \"2018年普通高等学校招生全国统一考试\",\n" +
            "  \"choices\": [\n" +
            "    {\n" +
            "      \"id\": \"001\",\n" +
            "      \"content\": \"被孟子称为“贱丈夫”的民间商人，最初是不合法的，不能到城里市场上去交易。他们只能在野外找个土岗，“以左右望”，获取利益。后来，民间商人向政府纳过税后就可以在城里的市场上进行交易了。这一变化反映了?\",\n" +
            "      \"options\": {\n" +
            "        \"a\": \"政府放弃重农抑商政策\",\n" +
            "        \"b\": \"民间商人推动商业市镇崛起\",\n" +
            "        \"c\": \"政府不再监管商业活动\",\n" +
            "        \"d\": \"民间商人可以取得合法地位\"\n" +
            "      }\n" +
            "    },\n" +
            "    {\n" +
            "      \"id\": \"002\",\n" +
            "      \"content\": \"有学者认为，唐代前期中央各级行政机关以及地方诸道州府，行政上皆承受于尚书省。“有事皆申尚书 省取裁闻奏，不能径奏君相；诏令制敕亦必先下尚书省详定，然后下百司。”由此可见，尚书省\",\n" +
            "      \"options\": {\n" +
            "        \"a\": \"剥夺中书与门下省的权力\",\n" +
            "        \"b\": \"拥有起草诏令制敕的职权\",\n" +
            "        \"c\": \"阻隔皇帝与各 州府的联系\",\n" +
            "        \"d\": \"成为全国行政运行的枢纽\"\n" +
            "      }\n" +
            "    },\n" +
            "    {\n" +
            "      \"id\": \"003\",\n" +
            "      \"content\": \"清代黄周星评论元曲说：“曲之体无他，不过八字尽之，曰少引圣籍，多发天然而已。”“制曲之诀无他，不过四字尽之，曰雅俗共赏。”这说明，元曲\",\n" +
            "      \"options\": {\n" +
            "        \"a\": \"贴近生活，易受欢迎\",\n" +
            "        \"b\": \"寄情山水，意境悠远\",\n" +
            "        \"c\": \"句式整齐，语言精炼\",\n" +
            "        \"d\": \"内容丰富，包罗万象\"\n" +
            "      }\n" +
            "    },\n" +
            "    {\n" +
            "      \"id\": \"004\",\n" +
            "      \"content\": \"明清时期，江南“桑蚕之利，厚于稼穑，公私赖焉”。在太湖流域，地主催收田租常不在秋收之后，却在农户蚕丝收获之际，俗称“蚕罢米”。这说明，当时江南地区\",\n" +
            "      \"options\": {\n" +
            "        \"a\": \"小农经济已经开始瓦解\",\n" +
            "        \"b\": \"农耕技术呈现衰退趋势\",\n" +
            "        \"c\": \"农户收入多赖家庭副业\",\n" +
            "        \"d\": \"地主剥削程度有所减轻\"\n" +
            "      }\n" +
            "    },\n" +
            "    {\n" +
            "      \"id\": \"005\",\n" +
            "      \"content\": \"江南制造总局是个十足的封建衙门。管理者是以督办为首的一群大大小小的官吏。他们对军器制造一窍不通，一切生产技术大权都操纵于洋人手中。有些洋匠不懂技术，招摇撞骗，因造不出火药，竟称“中国天气异于外国，与造此药不宜”。这表明，洋务企业\",\n" +
            "      \"options\": {\n" +
            "        \"a\": \"管理体系逐步完善\",\n" +
            "        \"b\": \"过度依赖西方技术[来源:Z&xx&k.Com]\",\n" +
            "        \"c\": \"逐渐成为外资企业\",\n" +
            "        \"d\": \"所雇洋匠皆为外行\"\n" +
            "      }\n" +
            "    },\n" +
            "    {\n" +
            "      \"id\": \"006\",\n" +
            "      \"content\": \"张园是清朝末年上海最大的私家园林，被主人开放为公共场所。它\",\n" +
            "      \"options\": {\n" +
            "        \"a\": \"延续传统绘画的以形求神\",\n" +
            "        \"b\": \"体现追求时尚的国民共识\",\n" +
            "        \"c\": \"反映世界交通的最新成果\",\n" +
            "        \"d\": \"表明社会生活的新旧杂陈\"\n" +
            "      }\n" +
            "    },\n" +
            "    {\n" +
            "      \"id\": \"007\",\n" +
            "      \"content\": \"近代四川有一首民谣：“自 从光绪二十八年把路办，银子凑了万万千，也有官的商的款，最可怜的庄稼汉，一两粮也出这项钱。要办路因为哪一件?怕的是外国占路权。”与该民谣相关的历史事件\",\n" +
            "      \"options\": {\n" +
            "        \"a\": \"导致太平天国运动的爆发\",\n" +
            "        \"b\": \"加速清朝政府的垮台\",\n" +
            "        \"c\": \"促使五四爱国运动的发生\",\n" +
            "        \"d\": \"推动国民革命的兴起\"\n" +
            "      }\n" +
            "    },\n" +
            "    {\n" +
            "      \"id\": \"008\",\n" +
            "      \"content\": \"1920年5月，《新青年》发表了陈独秀在上海船务、栈房工界联合会的演讲。该演讲称：世界劳动者的觉悟计分两步。第一步觉悟是要求待遇，第二步觉悟是要求管理权，要求做工的劳力者管理政治、军事、产业。这表明，此时马克思主义\",\n" +
            "      \"options\": {\n" +
            "        \"a\": \"正在与中国工人运动相结合\",\n" +
            "        \"b\": \"已成为中国共产党指导思想\",\n" +
            "        \"c\": \"解决了中国革命的道路问题\",\n" +
            "        \"d\": \"完成了中国化的第一次飞跃\"\n" +
            "      }\n" +
            "    },\n" +
            "    {\n" +
            "      \"id\": \"009\",\n" +
            "      \"content\": \"20世纪50年代后期，北京市向知识分子发放“高脑油”(高级脑力劳动者补助油)。关于发放的时间和定量，有以下记述：据此可知，关于“高脑油”的发放\",\n" +
            "      \"options\": {\n" +
            "        \"a\": \"展览的文字介绍真 实可靠\",\n" +
            "        \"b\": \"两部经济著作的记述完全一致\",\n" +
            "        \"c\": \"馆藏的原始文件更为可信\",\n" +
            "        \"d\": \"现有史料无法证明其是否实行\"\n" +
            "      }\n" +
            "    },\n" +
            "    {\n" +
            "      \"id\": \"013\",\n" +
            "      \"content\": \"1984年10月，邓小平指出：“处理国与国之间的关系，和平共处五项原则是最好的方式。其他方式，如‘大家庭’方，‘集团政治’方式，‘势力范围’方式，都会带来矛盾，激化国际局势。”邓小平得出上述论断，是因为和平共处五项原则\",\n" +
            "      \"options\": {\n" +
            "        \"a\": \"体现了国与国一律平等的理念\",\n" +
            "        \"b\": \"开创了中苏两国友好的局面\",\n" +
            "        \"c\": \"消除了国与国之间的矛盾分歧\",\n" +
            "        \"d\": \"推动了上海合作组织的建立\"\n" +
            "      }\n" +
            "    }\n" +
            "  ]\n" +
            "}";

    @GetMapping(value = "api/fetchQuestions", produces = MediaType.APPLICATION_JSON_VALUE)
    public JsonNode fetchQuestions() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readTree(QUESTIONS);
    }
}
