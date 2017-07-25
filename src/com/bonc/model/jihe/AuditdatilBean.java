package com.bonc.model.jihe;

public class AuditdatilBean {
	public String  check_type ; 
	public int   check_rule_num;
	public int   problem_num;
	public String    answer_prov;
	public String   unanswer_prov;
	
	
	
	public String getCheck_type() {
		return check_type;
	}
	public void setCheck_type(String check_type) {
		this.check_type = check_type;
	}
	public String getAnswer_prov() {
		return answer_prov;
	}
	public void setAnswer_prov(String answer_prov) {
		this.answer_prov = answer_prov;
	}
	public String getUnanswer_prov() {
		return unanswer_prov;
	}
	public void setUnanswer_prov(String unanswer_prov) {
		this.unanswer_prov = unanswer_prov;
	}
	public int getCheck_rule_num() {
		return check_rule_num;
	}
	public void setCheck_rule_num(int check_rule_num) {
		this.check_rule_num = check_rule_num;
	}
	public int getProblem_num() {
		return problem_num;
	}
	public void setProblem_num(int problem_num) {
		this.problem_num = problem_num;
	}
	@Override
	public String toString() {
		return "AuditdatilBean [check_type=" + check_type + ", check_rule_num=" + check_rule_num + ", problem_num="
				+ problem_num + ", answer_prov=" + answer_prov + ", unanswer_prov=" + unanswer_prov + "]";
	}
	

}
